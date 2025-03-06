import { PerspectiveCamera, WebGLRenderer } from 'three';

interface ResizeParams {
  camera: PerspectiveCamera;
  fov: number;
  renderer: WebGLRenderer;
}

export const resizeThreeCanvas = ({ camera, fov, renderer }: ResizeParams): void => {
  camera.fov = fov;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

export const calcFov = (cameraDistance: number): number => {
  return 2 * Math.atan(window.innerHeight / 2 / cameraDistance) * (180 / Math.PI);
};

export const lerp = (start: number, end: number, amt: number): number => {
  return (1 - amt) * start + amt * end;
};

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number = 100
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}; 