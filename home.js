//Hero header scale down and border radius on scroll
//gsap.to(".header_content", {
//    borderRadius: "3rem", // Adjust to your desired value
//    scale: 0.95,
//    scrollTrigger: {
//      trigger: ".header_content",
//      start: "top top", // Animation starts when the top of the hero reaches the top of the viewport
 //     end: "bottom top", // Animation ends when the bottom of the hero reaches the top of the viewport
//      scrub: true, // Smooth animation linked to scroll
 //   }
//  });

  gsap.to(".header_image", {
    y: "50vh",
    scrollTrigger: {
      trigger: ".header_content",
      start: "top top", // Animation starts when the top of the hero reaches the top of the viewport
      end: "bottom top", // Animation ends when the bottom of the hero reaches the top of the viewport
      scrub: true, // Smooth animation linked to scroll
    }
  });
  
  
//Hero image on load
document.addEventListener("DOMContentLoaded", function() {
  gsap.fromTo(".header_image", 
    {
      scale: 0.5,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 2.5,
      ease: "power3.inOut",
      onStart: () => console.log("Animation started"),
      onComplete: () => console.log("Animation completed")
    }
  );
});

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
console.log('home.js is fully loaded');

// Infinite scroll animation for scroller_content
gsap.to(".scroller_content.is_wide", {
  x: "-100vw", // Move 100vw left
  repeat: -1, // Infinite repeat
  duration: 10, // Adjust duration as needed
  ease: "none", // Linear movement
  onRepeat: () => {
    gsap.set(".scroller_content.is_wide", {x: 0}); // Reset position to start
  }
});

gsap.to(".scroller_content.is_small", {
  x: "-50vw", // Move 100vw left
  repeat: -1, // Infinite repeat
  duration: 10, // Adjust duration as needed
  ease: "none", // Linear movement
  onRepeat: () => {
    gsap.set(".scroller_content", {x: 0}); // Reset position to start
  }
});

// Make sure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Create media query for desktop breakpoint
  const mediaQuery = window.matchMedia("(min-width: 992px)");
  
  // Function to handle animations based on screen size
  const handleScreenSize = (e) => {
    const parents = document.querySelectorAll(".landing_list_item");
    
    // Remove existing event listeners and reset styles when switching to mobile
    parents.forEach((parent) => {
      parent.removeEventListener("mouseenter", parent._mouseenterHandler);
      parent.removeEventListener("mouseleave", parent._mouseleaveHandler);
      
      const titleBlock = parent.querySelector(".work_title_block");
      const images = parent.querySelectorAll(".image1, .image2, .image3");
      
      if (!e.matches) { // Mobile view
        gsap.set(titleBlock, {clearProps: "all"});
        images.forEach(image => gsap.set(image, {clearProps: "all"}));
      }
    });

    // Only set up animations for desktop
    if (e.matches) {
      console.log("Parent elements found:", parents.length);

      parents.forEach((parent, index) => {
        const tl = gsap.timeline({ paused: true, repeat: -1 });
        const titleTl = gsap.timeline({ paused: true });

        const images = parent.querySelectorAll(".image1, .image2, .image3");
        const titleBlock = parent.querySelector(".work_title_block");

        images.forEach((image) => {
          tl.to(image, { opacity: 1, duration: 0 })
            .to(image, { opacity: 0, duration: 0, delay: 0.6 });
        });

        titleTl.to(titleBlock, { opacity: 1, duration: 0 })
               .to(titleBlock, { rotation: -10, duration: 0.4, ease: "power4.out" });

        // Store handlers to be able to remove them later
        parent._mouseenterHandler = () => {
          console.log(`Mouse enter parent ${index} - playing timeline`);
          tl.play();
          titleTl.play();
        };

        parent._mouseleaveHandler = () => {
          console.log(`Mouse leave parent ${index} - resetting timeline`);
          tl.pause(0);
          titleTl.reverse();
        };

        parent.addEventListener("mouseenter", parent._mouseenterHandler);
        parent.addEventListener("mouseleave", parent._mouseleaveHandler);
      });
    }
  };

  // Initial check
  handleScreenSize(mediaQuery);
  
  // Add listener for screen size changes
  mediaQuery.addListener(handleScreenSize);
});
