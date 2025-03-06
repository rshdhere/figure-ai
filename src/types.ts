import { Mesh, ShaderMaterial, Texture, Vector2 } from 'three';
import { gsap } from 'gsap';

type GSAPTween = ReturnType<typeof gsap.to>;
type TweenVars = Parameters<typeof gsap.to>[1];

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

export interface ScrollTriggerVars extends TweenVars {
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
    ease?: string | Function;
  };
}

export interface AnimationTimeline extends GSAPTween {
  to: (target: string | object, vars: TweenVars | ScrollTriggerVars, position?: string | number) => AnimationTimeline;
  from: (target: string | object, vars: TweenVars | ScrollTriggerVars, position?: string | number) => AnimationTimeline;
  fromTo: (target: string | object, fromVars: TweenVars, toVars: TweenVars | ScrollTriggerVars, position?: string | number) => AnimationTimeline;
  add: (child: AnimationTimeline, position?: string | number) => AnimationTimeline;
  set: (target: string | object, vars: TweenVars, position?: string | number) => AnimationTimeline;
} 