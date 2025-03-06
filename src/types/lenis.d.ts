declare module '@studio-freight/lenis' {
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    wheelMultiplier?: number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    
    on(event: string, callback: (e: any) => void): void;
    off(event: string, callback: (e: any) => void): void;
    
    raf(time: number): void;
    scrollTo(target: number | string | HTMLElement, options?: {
      offset?: number;
      immediate?: boolean;
      duration?: number;
      easing?: (t: number) => number;
    }): void;
    
    stop(): void;
    start(): void;
    destroy(): void;
  }
} 