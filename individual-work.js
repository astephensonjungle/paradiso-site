gsap.to(".horizontal_scroll", {
    x: "-200vw", // Move the child element horizontally (you can change this to 'y' for vertical movement)
    scrollTrigger: {
      trigger: ".section_horizontalscroll",
      start: "top top", // When the parent element reaches the top of the viewport
      end: "bottom bottom", // When the bottom of the parent reaches the top of the viewport
      scrub: true, // Smooth animation tied to the scroll position
    }
  });

  //Side scroll into view
// First action: When the element scrolls from top bottom to top top
gsap.timeline({
    scrollTrigger: {
      trigger: ".section_horizontalscroll",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      //markers: true, // Optional: remove in production
      onUpdate: (self) => {
        const progress = self.progress;
        const element = document.querySelector(".sticky_scroll_container");
        
        // Assuming the sticky element becomes sticky at 50vw scroll and unsticks at 250vw scroll
        if (progress < 1/6) {
          // Scale up from 0.95 to 1 in the first 50vw (1/6 of 300vw)
          gsap.to(element, {
            scale: 0.95 + (progress * 6 * 0.05),
            borderRadius: 48 - (progress * 6 * 48),
            duration: 0,
          });
        } else if (progress > 5/6) {
          // Scale down from 1 to 0.95 in the last 50vw (1/6 of 300vw)
          const scaleDownProgress = (progress - 5/6) * 6;
          gsap.to(element, {
            scale: 1 - (scaleDownProgress * 0.05),
            borderRadius: scaleDownProgress * 48,
            duration: 0,
          });
        } else {
          // Keep scale at 1 while sticky (middle 200vw, or 2/3 of the scroll)
          gsap.to(element, {
            scale: 1,
            borderRadius: 0,
            duration: 0,
          });
        }
      }
    }
  });