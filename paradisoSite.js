

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
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('.footer');
  const footerMask = document.querySelector('.footer_mask');

  if (footer && footerMask) {
    gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "top top",
        scrub: true,
        // markers: false, // Uncomment for debugging
      }
    })
    .fromTo(footerMask, 
      {
        scale: 0.95,
        borderRadius: "3rem"
      },
      {
        scale: 1,
        borderRadius: "0rem",
        ease: "none"
      }
    );
  } else {
    console.warn('Footer or footer_mask element not found');
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

