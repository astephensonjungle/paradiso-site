

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

// Footer mask animation
// Footer mask animation that scales and changes border radius as user scrolls
// Get footer and footer mask elements
// const footer = document.querySelector('.footer');
// const footerMask = document.querySelector('.footer_mask');

// If both elements exist, create GSAP timeline animation
// if (footer && footerMask) {
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: footer,          // Trigger animation on footer element
//       start: "top bottom",      // Start when footer top hits viewport bottom
//       end: "top top",          // End when footer top hits viewport top
//       scrub: true,             // Smooth animation with scroll
//       // markers: false,        // Uncomment for debugging
//     }
//   })
//   .fromTo(footerMask,          // Animate the footer mask
//     {
//       scale: 0.95,             // Start slightly scaled down
//       borderRadius: "3rem"      // Start with rounded corners
//     },
//     {
//       scale: 1,                // Scale to full size
//       borderRadius: "0rem",     // Remove rounded corners
//       ease: "none"             // Linear animation
//     }
//   );
// } else {
//   console.warn('Footer or footer_mask element not found');
// }

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

