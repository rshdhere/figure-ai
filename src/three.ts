import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import * as THREE from "three";
import { resizeThreeCanvas, calcFov, debounce, lerp } from "./utils";
import { ScrollState, CursorPosition, MediaObject, UniformObject } from "./types";
import effectVertex from "./shader/effectVertex.glsl";
import effectFragment from "./shader/effectFragment.glsl";
import { IUniform } from 'three';

gsap.registerPlugin(CustomEase);

// smooth scroll (lenis)
let scroll: ScrollState = {
  scrollY: window.scrollY,
  scrollVelocity: 0,
};

const lenis: Lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

lenis.on("scroll", (e: { velocity: number }) => {
  scroll.scrollY = window.scrollY;
  scroll.scrollVelocity = e.velocity;
});

function scrollRaf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(scrollRaf);
}

requestAnimationFrame(scrollRaf);

// cursor position
let cursorPos: CursorPosition = {
  current: { x: 0.5, y: 0.5 },
  target: { x: 0.5, y: 0.5 },
};

let cursorRaf: number | null = null;

const lerpCursorPos = (): void => {
  const x = lerp(cursorPos.current.x, cursorPos.target.x, 0.05);
  const y = lerp(cursorPos.current.y, cursorPos.target.y, 0.05);

  cursorPos.current.x = x;
  cursorPos.current.y = y;

  const delta = Math.sqrt(
    (cursorPos.target.x - cursorPos.current.x) ** 2 +
      (cursorPos.target.y - cursorPos.current.y) ** 2
  );

  if (delta < 0.001 && cursorRaf) {
    cancelAnimationFrame(cursorRaf);
    cursorRaf = null;
    return;
  }

  cursorRaf = requestAnimationFrame(lerpCursorPos);
};

window.addEventListener("mousemove", (event: MouseEvent) => {
  cursorPos.target.x = event.clientX / window.innerWidth;
  cursorPos.target.y = event.clientY / window.innerHeight;

  if (!cursorRaf) {
    cursorRaf = requestAnimationFrame(lerpCursorPos);
  }
});

let mediaStore: MediaObject[] = [];
let scene: THREE.Scene;
let geometry: THREE.PlaneGeometry;
let material: THREE.ShaderMaterial;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;

// helper for image-to-webgl and uniform updates
const handleMouseEnter = (index: number): void => {
  gsap.to(mediaStore[index], {
    mouseEnter: 1,
    duration: 0.6,
    ease: CustomEase.create("custom", "0.4, 0, 0.2, 1"),
  });
};

const handleMousePos = (e: MouseEvent, index: number): void => {
  const bounds = mediaStore[index].media.getBoundingClientRect();
  const x = e.offsetX / bounds.width;
  const y = e.offsetY / bounds.height;

  mediaStore[index].mouseOverPos.target.x = x;
  mediaStore[index].mouseOverPos.target.y = y;
};

const handleMouseLeave = (index: number): void => {
  gsap.to(mediaStore[index], {
    mouseEnter: 0,
    duration: 0.6,
    ease: CustomEase.create("custom", "0.4, 0, 0.2, 1"),
  });
  gsap.to(mediaStore[index].mouseOverPos.target, {
    x: 0.5,
    y: 0.5,
    duration: 0.6,
    ease: CustomEase.create("custom", "0.4, 0, 0.2, 1"),
  });
};

// Initialize Three.js scene and objects
const initThree = (): void => {
  // Scene setup
  scene = new THREE.Scene();
  
  // Camera setup
  const CAMERA_DISTANCE = 500;
  camera = new THREE.PerspectiveCamera(
    calcFov(CAMERA_DISTANCE),
    window.innerWidth / window.innerHeight,
    10,
    1000
  );
  camera.position.z = CAMERA_DISTANCE;

  // Renderer setup
  const canvas = document.querySelector<HTMLCanvasElement>('.three');
  if (!canvas) return;

  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Geometry and material setup
  geometry = new THREE.PlaneGeometry(1, 1, 100, 100);
  
  const uniforms: { [key: string]: IUniform<any> } = {
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uTime: { value: 0 },
    uCursor: { value: new THREE.Vector2(0.5, 0.5) },
    uScrollVelocity: { value: 0 },
    uTexture: { value: null },
    uTextureSize: { value: new THREE.Vector2(100, 100) },
    uQuadSize: { value: new THREE.Vector2(100, 100) },
    uBorderRadius: { value: 0 },
    uMouseEnter: { value: 0 },
    uMouseOverPos: { value: new THREE.Vector2(0.5, 0.5) },
  };

  material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: effectVertex,
    fragmentShader: effectFragment,
    glslVersion: THREE.GLSL3,
    transparent: true,  // Enable transparency
  });

  // Set up media store
  setupMediaStore();
};

const setupMediaStore = (): void => {
  const webglElements = document.querySelectorAll<HTMLImageElement>('.webgl');
  
  webglElements.forEach((element, index) => {
    const loadImage = () => {
      const bounds = element.getBoundingClientRect();
      const mesh = new THREE.Mesh(geometry, material.clone());
      
      // Create and load texture with proper settings
      const texture = new THREE.Texture(element);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
      texture.needsUpdate = true;

      const meshMaterial = mesh.material as THREE.ShaderMaterial;
      meshMaterial.transparent = true;
      meshMaterial.uniforms.uTexture.value = texture;
      meshMaterial.uniforms.uTextureSize.value.set(
        element.naturalWidth || bounds.width,
        element.naturalHeight || bounds.height
      );
      meshMaterial.uniforms.uQuadSize.value.set(bounds.width, bounds.height);
      meshMaterial.uniforms.uBorderRadius.value = parseFloat(getComputedStyle(element).borderRadius) || 0;

      mesh.scale.set(bounds.width, bounds.height, 1);
      mesh.position.x = bounds.left - window.innerWidth / 2 + bounds.width / 2;
      mesh.position.y = -bounds.top + window.innerHeight / 2 - bounds.height / 2 + window.scrollY;

      scene.add(mesh);

      // Add to media store with proper initial values
      mediaStore.push({
        media: element,
        material: meshMaterial,
        mesh: mesh,
        width: bounds.width,
        height: bounds.height,
        top: bounds.top + window.scrollY,
        left: bounds.left,
        isInView: true,
        mouseEnter: 0,
        mouseOverPos: {
          current: { x: 0.5, y: 0.5 },
          target: { x: 0.5, y: 0.5 },
        },
      });

      // Add event listeners
      element.addEventListener("mouseenter", () => handleMouseEnter(index));
      element.addEventListener("mousemove", (e) => handleMousePos(e, index));
      element.addEventListener("mouseleave", () => handleMouseLeave(index));

      // Update texture when image source changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "src") {
            texture.needsUpdate = true;
          }
        });
      });

      observer.observe(element, { attributes: true });
    };

    // Handle image loading
    if (element.complete) {
      loadImage();
    } else {
      element.addEventListener('load', loadImage);
      element.addEventListener('error', () => {
        console.error('Error loading image:', element.src);
      });
    }
  });
};

// Animation loop
const animate = (time: number = 0): void => {
  time *= 0.001; // Convert to seconds

  // Update uniforms and positions
  mediaStore.forEach((object) => {
    if (object.isInView) {
      const material = object.material;
      material.uniforms.uTime.value = time;
      material.uniforms.uCursor.value.set(cursorPos.current.x, cursorPos.current.y);
      material.uniforms.uScrollVelocity.value = scroll.scrollVelocity;
      material.uniforms.uMouseOverPos.value.set(
        object.mouseOverPos.current.x,
        object.mouseOverPos.current.y
      );
      
      // Update mesh position with smooth interpolation
      const targetX = object.left - window.innerWidth / 2 + object.width / 2;
      const targetY = -object.top + window.innerHeight / 2 - object.height / 2 + scroll.scrollY;
      
      object.mesh.position.x = lerp(object.mesh.position.x, targetX, 0.1);
      object.mesh.position.y = lerp(object.mesh.position.y, targetY, 0.1);

      // Update texture if needed
      if (material.uniforms.uTexture.value) {
        material.uniforms.uTexture.value.needsUpdate = true;
      }
    }
  });

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

// Initialize everything
initThree();
animate();

// Handle window resize
window.addEventListener('resize', debounce(() => {
  if (camera && renderer) {
    const fov = calcFov(camera.position.z);
    resizeThreeCanvas({ camera, fov, renderer });

    mediaStore.forEach((object) => {
      const bounds = object.media.getBoundingClientRect();
      object.mesh.scale.set(bounds.width, bounds.height, 1);
      object.width = bounds.width;
      object.height = bounds.height;
      object.top = bounds.top + window.scrollY;
      object.left = bounds.left;
      object.material.uniforms.uQuadSize.value.set(bounds.width, bounds.height);
    });
  }
}));

// Export necessary objects and functions
export { scene, geometry, material, mediaStore, scroll, cursorPos }; 