// Importing the libraries
import "remixicon/fonts/remixicon.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Clutter Animation
const clutterAnimation = (element) => {
  const htmlTag = document.querySelector(element);
  let clutter = "";

  // Splitting the text content into individual letters and wrapping each in a span with a class
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });

  // Updating the HTML content of the element with the animated spans
  htmlTag.innerHTML = clutter;
};

const loaderAnimation = () => {
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
loaderAnimation();

// Page2 Animation
const page2Animation = () => {
  gsap.to(".page2-video>video", {
    width: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: "#page2",
      start: "top 85%",
      end: "top 0%",
      scrub: 1.5,
      ease: "power2.inOut",
    },
  });
};

page2Animation();

const page5Animation = () => {
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

  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "0% 0%",
      end: "200% 0%",
      pin: true,
      scrub: 2.5,
    },
  });

  tl5
    .to(
      "#page5 #card3",
      {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "aa"
    )
    .to(
      "#page5 #circle-1",
      {
        backgroundColor: "transparent",
      },
      "aa"
    )
    .to(
      "#page5 #circle-2",
      {
        backgroundColor: "#000",
      },
      "aa"
    )
    .from(
      "#page5 #card2 .text-div h5",
      {
        transform: "translateY(100%)",
      },
      "a"
    )
    .from(
      "#page5 #card2 #video",
      {
        opacity: 0,
      },
      "a"
    )
    .from(
      "#page5 #card2 .head-div h1",
      {
        transform: "translateY(100%)",
      },
      "a"
    )
    .to(
      "#page5 #card2",
      {
        opacity: 0,
      },
      "bb"
    )
    .to(
      "#page5 #circle-2",
      {
        backgroundColor: "transparent",
      },
      "bb"
    )
    .to(
      "#page5 #circle-3",
      {
        backgroundColor: "#000",
      },
      "bb"
    )
    .from(
      "#page5 #card1 .text-div h5",
      {
        transform: "translateY(100%)",
      },
      "b"
    )
    .from(
      "#page5 #card1 #video",
      {
        opacity: 0,
      },
      "b"
    )
    .from(
      "#page5 #card1 .head-div h1",
      {
        transform: "translateY(100%)",
      },
      "b"
    )
    .from(
      "#page5 #card1 .sub-head-div h3",
      {
        transform: "translateY(100%)",
      },
      "b"
    );
};
page5Animation();

const page4Animation = () => {
  gsap.from("#page4 h1", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top 70%",
      end: "top 40%",
      // markers: true,
      scrub: 1,
    },
  });
};
page4Animation();

function canvas() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      ./canvas/ezgif-frame-001.png
      ./canvas/ezgif-frame-002.png
      ./canvas/ezgif-frame-003.png
      ./canvas/ezgif-frame-004.png
      ./canvas/ezgif-frame-005.png
      ./canvas/ezgif-frame-006.png
      ./canvas/ezgif-frame-007.png
      ./canvas/ezgif-frame-008.png
      ./canvas/ezgif-frame-009.png
      ./canvas/ezgif-frame-010.png
      ./canvas/ezgif-frame-011.png
      ./canvas/ezgif-frame-012.png
      ./canvas/ezgif-frame-013.png
      ./canvas/ezgif-frame-014.png
      ./canvas/ezgif-frame-015.png
      ./canvas/ezgif-frame-016.png
      ./canvas/ezgif-frame-017.png
      ./canvas/ezgif-frame-018.png
      ./canvas/ezgif-frame-019.png
      ./canvas/ezgif-frame-020.png
      ./canvas/ezgif-frame-021.png
      ./canvas/ezgif-frame-022.png
      ./canvas/ezgif-frame-023.png
      ./canvas/ezgif-frame-024.png
      ./canvas/ezgif-frame-025.png
      ./canvas/ezgif-frame-026.png
      ./canvas/ezgif-frame-027.png
      ./canvas/ezgif-frame-028.png
      ./canvas/ezgif-frame-029.png
      ./canvas/ezgif-frame-030.png
      ./canvas/ezgif-frame-031.png
      ./canvas/ezgif-frame-032.png
      ./canvas/ezgif-frame-033.png
      ./canvas/ezgif-frame-034.png
      ./canvas/ezgif-frame-035.png
      ./canvas/ezgif-frame-036.png
      ./canvas/ezgif-frame-037.png
      ./canvas/ezgif-frame-038.png
      ./canvas/ezgif-frame-039.png
      ./canvas/ezgif-frame-040.png
      ./canvas/ezgif-frame-041.png
      ./canvas/ezgif-frame-042.png
      ./canvas/ezgif-frame-043.png
      ./canvas/ezgif-frame-044.png
      ./canvas/ezgif-frame-045.png
      ./canvas/ezgif-frame-046.png
      ./canvas/ezgif-frame-047.png
      ./canvas/ezgif-frame-048.png
      ./canvas/ezgif-frame-049.png
      ./canvas/ezgif-frame-050.png
      ./canvas/ezgif-frame-051.png
      ./canvas/ezgif-frame-052.png
      ./canvas/ezgif-frame-053.png
      ./canvas/ezgif-frame-054.png
      ./canvas/ezgif-frame-055.png
      ./canvas/ezgif-frame-056.png
      ./canvas/ezgif-frame-057.png
      ./canvas/ezgif-frame-058.png
      ./canvas/ezgif-frame-059.png
      ./canvas/ezgif-frame-060.png
      ./canvas/ezgif-frame-061.png
      ./canvas/ezgif-frame-062.png
      ./canvas/ezgif-frame-063.png
      ./canvas/ezgif-frame-064.png
      ./canvas/ezgif-frame-065.png
      ./canvas/ezgif-frame-066.png
      ./canvas/ezgif-frame-067.png
      ./canvas/ezgif-frame-068.png
      ./canvas/ezgif-frame-069.png
      ./canvas/ezgif-frame-070.png
      ./canvas/ezgif-frame-071.png
      ./canvas/ezgif-frame-072.png
      ./canvas/ezgif-frame-073.png
      ./canvas/ezgif-frame-074.png
      ./canvas/ezgif-frame-075.png
      ./canvas/ezgif-frame-076.png
      ./canvas/ezgif-frame-077.png
      ./canvas/ezgif-frame-078.png
      ./canvas/ezgif-frame-079.png
      ./canvas/ezgif-frame-080.png
      ./canvas/ezgif-frame-081.png
      ./canvas/ezgif-frame-082.png
      ./canvas/ezgif-frame-083.png
      ./canvas/ezgif-frame-084.png
      ./canvas/ezgif-frame-085.png
      ./canvas/ezgif-frame-086.png
      ./canvas/ezgif-frame-087.png
      ./canvas/ezgif-frame-088.png
      ./canvas/ezgif-frame-089.png
      ./canvas/ezgif-frame-090.png
      ./canvas/ezgif-frame-091.png
      ./canvas/ezgif-frame-092.png
      ./canvas/ezgif-frame-093.png
      ./canvas/ezgif-frame-094.png
      ./canvas/ezgif-frame-095.png
      ./canvas/ezgif-frame-096.png
      ./canvas/ezgif-frame-097.png
      ./canvas/ezgif-frame-098.png
      ./canvas/ezgif-frame-099.png
      ./canvas/ezgif-frame-100.png
      ./canvas/ezgif-frame-101.png
      ./canvas/ezgif-frame-102.png
      ./canvas/ezgif-frame-103.png
      ./canvas/ezgif-frame-104.png
      ./canvas/ezgif-frame-105.png
      ./canvas/ezgif-frame-106.png
      ./canvas/ezgif-frame-107.png
      ./canvas/ezgif-frame-108.png
      ./canvas/ezgif-frame-109.png
      ./canvas/ezgif-frame-110.png
      ./canvas/ezgif-frame-111.png
      ./canvas/ezgif-frame-112.png
      ./canvas/ezgif-frame-113.png
      ./canvas/ezgif-frame-114.png
      ./canvas/ezgif-frame-115.png
      ./canvas/ezgif-frame-116.png
      ./canvas/ezgif-frame-117.png
      ./canvas/ezgif-frame-118.png
      ./canvas/ezgif-frame-119.png
      ./canvas/ezgif-frame-120.png
      ./canvas/ezgif-frame-121.png
      ./canvas/ezgif-frame-122.png
      ./canvas/ezgif-frame-123.png
      ./canvas/ezgif-frame-124.png
      ./canvas/ezgif-frame-125.png
      ./canvas/ezgif-frame-126.png
      ./canvas/ezgif-frame-127.png
      ./canvas/ezgif-frame-128.png
      ./canvas/ezgif-frame-129.png
      ./canvas/ezgif-frame-130.png
      ./canvas/ezgif-frame-131.png
      ./canvas/ezgif-frame-132.png
      ./canvas/ezgif-frame-133.png
      ./canvas/ezgif-frame-134.png
      ./canvas/ezgif-frame-135.png
      ./canvas/ezgif-frame-136.png
      ./canvas/ezgif-frame-137.png
      ./canvas/ezgif-frame-138.png
      ./canvas/ezgif-frame-139.png
      ./canvas/ezgif-frame-140.png
      ./canvas/ezgif-frame-141.png
      ./canvas/ezgif-frame-142.png
      ./canvas/ezgif-frame-143.png
      ./canvas/ezgif-frame-144.png
      ./canvas/ezgif-frame-145.png
      ./canvas/ezgif-frame-146.png
      ./canvas/ezgif-frame-147.png
      ./canvas/ezgif-frame-148.png
      ./canvas/ezgif-frame-149.png
      ./canvas/ezgif-frame-150.png
      ./canvas/ezgif-frame-151.png
      ./canvas/ezgif-frame-152.png
      ./canvas/ezgif-frame-153.png
      ./canvas/ezgif-frame-154.png
      ./canvas/ezgif-frame-155.png
      ./canvas/ezgif-frame-156.png
      ./canvas/ezgif-frame-157.png
      ./canvas/ezgif-frame-158.png
      ./canvas/ezgif-frame-159.png
      ./canvas/ezgif-frame-160.png
      ./canvas/ezgif-frame-161.png
      ./canvas/ezgif-frame-162.png
      ./canvas/ezgif-frame-163.png
      ./canvas/ezgif-frame-164.png
      ./canvas/ezgif-frame-165.png
      ./canvas/ezgif-frame-166.png
      ./canvas/ezgif-frame-167.png
      ./canvas/ezgif-frame-168.png
      ./canvas/ezgif-frame-169.png
      ./canvas/ezgif-frame-170.png
      ./canvas/ezgif-frame-171.png
      ./canvas/ezgif-frame-172.png
      ./canvas/ezgif-frame-173.png
      ./canvas/ezgif-frame-174.png
      ./canvas/ezgif-frame-175.png
      ./canvas/ezgif-frame-176.png
      ./canvas/ezgif-frame-177.png
      ./canvas/ezgif-frame-178.png
      ./canvas/ezgif-frame-179.png
      ./canvas/ezgif-frame-180.png
      ./canvas/ezgif-frame-181.png
      ./canvas/ezgif-frame-182.png
      ./canvas/ezgif-frame-183.png
      ./canvas/ezgif-frame-184.png
      ./canvas/ezgif-frame-185.png
      ./canvas/ezgif-frame-186.png
      ./canvas/ezgif-frame-187.png
      ./canvas/ezgif-frame-188.png
      ./canvas/ezgif-frame-189.png
      ./canvas/ezgif-frame-190.png
      ./canvas/ezgif-frame-191.png
      ./canvas/ezgif-frame-192.png
      ./canvas/ezgif-frame-193.png
      ./canvas/ezgif-frame-194.png
      ./canvas/ezgif-frame-195.png
      ./canvas/ezgif-frame-196.png
      ./canvas/ezgif-frame-197.png
      ./canvas/ezgif-frame-198.png
      ./canvas/ezgif-frame-199.png
      ./canvas/ezgif-frame-200.png
      ./canvas/ezgif-frame-201.png
      ./canvas/ezgif-frame-202.png
      ./canvas/ezgif-frame-203.png
      ./canvas/ezgif-frame-204.png
      ./canvas/ezgif-frame-205.png
      ./canvas/ezgif-frame-206.png
   `;
    return data.split("\n")[index];
  }

  const frameCount = 206;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  var ctl = gsap.timeline({
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#canvas-card`,
      start: `top center`,
      end: `bottom top`,
      scroller: `body`,
    },
  });
  ctl.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
}
canvas();

// Page 3 Animation

const page3Animation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#page3",
      start: "top 30%",
      end: "top -20%",
      scrub: 1.5,
    },
  });
  tl.from("#pg3-upper h1,#pg3-upper h5", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.15,
    ease: "power2.out",
  });

  const t2 = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#pg3-lower",
      start: "top 30%",
      end: "top -20%",
      scrub: 1.5,
    },
  });
  t2.from("#pg3-lower h1, #pg3-lower h5", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.15,
    ease: "power2.out",
  });
};
page3Animation();

const ringAnimation = () => {
  var tl6 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#rings-container",
        scroller: "body",
        start: "-20% 00%",
        end: "30% 00%",
        scrub: 2.5,
      },
    })
    .from("#rings-container #large-ring", {
      width: "0vw",
      height: "0vw",
      ease: "power2.inOut",
      duration: 1.2,
    })
    .from("#rings-container #small-ring", {
      width: "0vw",
      height: "0vw",
      delay: -0.2,
      ease: "power2.inOut",
      duration: 1.2,
    });
};
ringAnimation();

// Page 6 Animation
const page6Animation = () => {
  const page6Products = document.querySelector(".page6-products");

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

  gsap.from(".page6-products h1, .page6-products p", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      start: "top 30%",
      end: "top 0%",
      scrub: 1.5,
    },
  });

  page6Products.addEventListener("mousemove", (event) => {
    document.body.style.cursor = "none";
    gsap.to(".page6-product-cursor", {
      left: event.clientX - 350,
      top: event.clientY - 350,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  page6Products.addEventListener("mouseleave", (event) => {
    document.body.style.cursor = "initial";
    gsap.to(".page6-product-cursor", {
      scale: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  });

  let productFlag = "product1";

  const product1 = () => {
    const tl = gsap.timeline();
    tl.to(
      ".page6-contianer",
      {
        backgroundImage: "linear-gradient(to bottom right, #E0E0E0, #666666)", // set background color,
      },
      "a"
    )
      .to(
        ".page6-product-img1",
        {
          top: "-150%",
          opacity: 0,
          ease: "power1.in",
          onComplete: () => {
            gsap.to(".page6-product-img1", {
              top: "100%",
            });
          },
        },
        "a"
      )
      .to(".page6-product-img2", {
        top: "-50%",
        opacity: 1,
      });
    productFlag = "product2";
  };

  const product2 = () => {
    const tl = gsap.timeline();
    tl.to(
      ".page6-contianer",
      {
        backgroundImage: "linear-gradient(to bottom right, #3c4ef3, #182ef3)", // set background color,
      },
      "a"
    )
      .to(
        ".page6-product-img2",
        {
          top: "-150%",
          opacity: 0,
          ease: "power1.out",
          onComplete: () => {
            gsap.to(".page6-product-img2", {
              top: "100%",
            });
          },
        },
        "a"
      )
      .to(".page6-product-img1", {
        top: "-50%",
        opacity: 1,
      });
    productFlag = "product1";
  };

  page6Products.addEventListener("click", (event) => {
    if (productFlag === "product1") {
      product1();
      const tl = gsap.timeline();
      tl.to(".page6-product-cursor>h3", {
        text: "",
      });
      tl.to(
        ".page6-product-cursor>h3",
        {
          text: "NEXT",
        },
        "a"
      );
      tl.to(
        ".page6-products-dets>h1",
        {
          text: "Figure 01",
        },
        "a"
      );
      tl.to(
        ".page6-products-dets>p",
        {
          text: "Figure 01 was Figure AI’s pioneering humanoid robot, designed for logistics and warehousing tasks. As a proof-of-concept, it demonstrated AI-driven automation in real-world environments, paving the way for more advanced models like Figure 02. Its development showcased the potential of humanoid robots in addressing labor shortages and improving industrial efficiency.",
        },
        "a"
      );
    } else if (productFlag === "product2") {
      product2();
      const tl = gsap.timeline();
      tl.to(".page6-product-cursor>h3", {
        text: "",
      });
      tl.to(
        ".page6-product-cursor>h3",
        {
          text: "NEXT",
        },
        "a"
      );
      tl.to(
        ".page6-products-dets>h1",
        {
          text: "Figure 02",
        },
        "a"
      );
      tl.to(
        ".page6-products-dets>p",
        {
          text: "Equipped with six high-resolution RGB cameras and an onboard vision-language model, Figure 02 excels in perceiving and navigating its environment with precision. This advanced sensory suite is complemented by robust computing power provided by NVIDIA RTX GPU-based modules, delivering three times the inference capability of its predecessor.",
        },
        "a"
      );
    }
  });
};

page6Animation();

const page7Animation = () => {
  const text = gsap.timeline({
    scrollTrigger: {
      trigger: "#page7",
      start: "top 50%",
      end: "top 10%",
      scrub: 1.5,
    },
  });

  text.from(".page7-text", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.15,
    ease: "power2.out",
  });

  text.from(".page7-container>h3 , .page7-container>p", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.15,
    ease: "power2.out",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#page7",
      start: "top 0%",
      end: "top -150%",
      scrub: 2.5,
      pin: true,
    },
  });
  tl.to(".page7-elem", {
    width: "24%",
    stagger: 0.15,
    backgroundColor: "#e2ffdf",
    color: "#07003f",
    ease: "power2.inOut",
    duration: 1,
  });
};

page7Animation();

const rings = () => {
  gsap.from("#rings-container h1 , #rings-container p", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#rings-container",
      scroller: "body",
      start: "top 30%",
      end: "top -10%",
      scrub: 1.5,
    },
  });
};

rings();
