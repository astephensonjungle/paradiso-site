

// Element move up animation
document.addEventListener('DOMContentLoaded', function() {
  // Check if the footer and footer_logo elements exist
  const footer = document.querySelector('.footer');
  const footerLogo = document.querySelector('.footer_logo');

  if (footer && footerLogo) {
    gsap.from(footerLogo, {
      scrollTrigger: {
        trigger: footer,
        start: "top bottom", // Start when the top of the footer hits the bottom of the viewport
        end: "bottom bottom", // End when the bottom of the footer hits the bottom of the viewport
        scrub: true, // Smooth scrubbing effect
        markers: false, // Set to true for debugging
        // Add some tolerance for shorter pages
        onEnter: (self) => {
          // Only animate if there's enough scroll height
          if (document.documentElement.scrollHeight > window.innerHeight * 1.5) {
            self.enable();
          } else {
            self.disable();
          }
        }
      },
      y: "-12rem", // Start 12rem lower
      ease: "none",
    });
  }
});

// Fade in elements with class 'fade-in-element' as they scroll into view
gsap.utils.toArray('.fade-in-element').forEach(element => {
  gsap.fromTo(element, 
    {
      opacity: 1,
      y: "8rem",
    },
    {
      opacity: 1,
      y: "0rem",
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      }
    }
  );
});

gsap.to(".scroller_content.is_wide", {
  x: "-100vw", // Move 100vw left
  repeat: -1, // Infinite repeat
  duration: 10, // Adjust duration as needed
  ease: "none", // Linear movement
  onRepeat: () => {
    gsap.set(".scroller_content.is_wide", {x: 0}); // Reset position to start
  }
});
