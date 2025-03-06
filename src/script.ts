import "remixicon/fonts/remixicon.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { AnimationTimeline, ProductState } from "./types";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

window.onbeforeunload = function (): void {
  window.scrollTo(0, 0);
};

// Clutter Animation
const clutterAnimation = (element: string): void => {
  const htmlTag = document.querySelector<HTMLElement>(element);
  if (!htmlTag) return;
  
  let clutter = "";

  // Splitting the text content into individual letters and wrapping each in a span with a class
  htmlTag.textContent?.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });

  // Updating the HTML content of the element with the animated spans
  htmlTag.innerHTML = clutter;
};

const loaderAnimation = (): void => {
  const tl = gsap.timeline({ repeat: -1 });
  clutterAnimation(".loader-text>h1");
  tl.from(".loader-text>h1>span", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: {
      amount: 1.2,
      from: "x",
    },
    ease: "power2.out",
  });

  gsap.to(".main-loader-p", {
    width: "100%",
    duration: 4,
    ease: "power2.inOut",
    onComplete: () => {
      const tl = gsap.timeline();
      tl.to(".c1", {
        top: "-100%",
        duration: 1,
        ease: "power3.inOut",
      })
        .to(".main-loader", {
          top: "-100%",
          duration: 1,
          ease: "power3.inOut",
        })
        .from("#navbar", {
          y: "-130",
          duration: 0.8,
          ease: "power2.out",
        })
        .from("#overlay-p1 h1 , #overlay-p1 h2 ,#overlay-p1 p", {
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });
    },
  });
};

const page2Animation = (): void => {
  gsap.to(".page2-video>video", {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#page2",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    }
  });
};

const page5Animation = (): void => {
  gsap.from("#pg5-header h1", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "top 70%",
      end: "top 40%",
      scrub: 1.5,
      ease: "power2.out",
    },
  });

  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "0% 0%",
      end: "200% 0%",
      pin: true,
      scrub: 2.5,
    },
  });

  // Add page5 timeline animations...
  tl5
    .to("#page5 #card3", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    }, "aa")
    .to("#page5 #circle-1", {
      backgroundColor: "transparent",
    }, "aa")
    // ... rest of the timeline animations

  gsap.to(".page5-content", {
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page5",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    }
  });
};

const page6Animation = (): void => {
  const page6Products = document.querySelector<HTMLElement>(".page6-products");
  if (!page6Products) return;

  gsap.from(".page6-product-img1", {
    top: "-100%",
    opacity: 0,
    filter: "blur(10px)",
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#page6",
      start: "top 30%",
      end: "top 0%",
    },
  });

  const productState: ProductState = {
    flag: "product1"
  };

  const product1 = (): void => {
    const tl = gsap.timeline();
    tl.to(".page6-contianer", {
      backgroundImage: "linear-gradient(to bottom right, #FB0408, #ba0407)",
    }, "a")
    .to(".page6-product-img1", {
      top: "-150%",
      opacity: 0,
      ease: "power1.in",
      onComplete: () => {
        gsap.to(".page6-product-img1", {
          top: "100%",
        });
      },
    }, "a")
    .to(".page6-product-img2", {
      top: "-50%",
      opacity: 1,
    });
    productState.flag = "product2";
  };

  const product2 = (): void => {
    // Similar implementation as product1 with proper types
  };

  // Add event listeners with proper types
  page6Products.addEventListener("mousemove", (event: MouseEvent) => {
    document.body.style.cursor = "none";
    gsap.to(".page6-product-cursor", {
      left: event.clientX - 350,
      top: event.clientY - 350,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  // ... rest of the event listeners and animations
};

// Initialize animations
loaderAnimation();
page2Animation();
page5Animation();
page6Animation();
// ... rest of the animation initializations 