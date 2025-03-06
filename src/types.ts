import { Mesh, ShaderMaterial, Texture, Vector2 } from 'three';
import { gsap } from 'gsap';

// Define base types for GSAP
type GSAPTween = ReturnType<typeof gsap.to>;

// Define the base TweenVars type
interface BaseTweenVars {
  duration?: number;
  ease?: string | Function;
  delay?: number;
  [key: string]: any;
}

// Extend BaseTweenVars for ScrollTrigger
export interface ScrollTriggerVars extends BaseTweenVars {
  scrollTrigger?: {
    trigger?: string | Element;
    start?: string | number | Function;
    end?: string | number | Function;
    scrub?: boolean | number;
    pin?: boolean | string | Element;
    markers?: boolean;
    onEnter?: Function;
    onLeave?: Function;
    onEnterBack?: Function;
    onLeaveBack?: Function;
    scroller?: string | Element;
  };
}

export interface ScrollState {
  scrollY: number;
  scrollVelocity: number;
}

export interface CursorPosition {
  current: {
    x: number;
    y: number;
  };
  target: {
    x: number;
    y: number;
  };
}

export interface MouseOverPosition {
  current: {
    x: number;
    y: number;
  };
  target: {
    x: number;
    y: number;
  };
}

export interface MediaObject {
  media: HTMLElement;
  material: ShaderMaterial;
  mesh: Mesh;
  width: number;
  height: number;
  top: number;
  left: number;
  isInView: boolean;
  mouseEnter: number;
  mouseOverPos: MouseOverPosition;
}

export interface UniformObject {
  uResolution: { value: Vector2 };
  uTime: { value: number };
  uCursor: { value: Vector2 };
  uScrollVelocity: { value: number };
  uTexture: { value: Texture | null };
  uTextureSize: { value: Vector2 };
  uQuadSize: { value: Vector2 };
  uBorderRadius: { value: number };
  uMouseEnter: { value: number };
  uMouseOverPos: { value: Vector2 };
}

export interface ProductState {
  flag: 'product1' | 'product2';
}

export interface AnimationTimeline extends GSAPTween {
  to: (target: string | object, vars: BaseTweenVars | ScrollTriggerVars, position?: string | number) => AnimationTimeline;
  from: (target: string | object, vars: BaseTweenVars | ScrollTriggerVars, position?: string | number) => AnimationTimeline;
  fromTo: (target: string | object, fromVars: BaseTweenVars, toVars: BaseTweenVars | ScrollTriggerVars, position?: string | number) => AnimationTimeline;
  add: (child: AnimationTimeline, position?: string | number) => AnimationTimeline;
  set: (target: string | object, vars: BaseTweenVars, position?: string | number) => AnimationTimeline;
} 