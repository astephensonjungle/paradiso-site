

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.work_list_image'); // Adjust this selector to match your image elements
  
    images.forEach(image => {
      gsap.to(image, {
        y: '50%', // Adjust this value to control the amount of movement
        ease: 'none',
        scrollTrigger: {
          trigger: '.work_container',
          start: 'top bottom', // Start when the top of the image reaches the bottom of the viewport
          end: 'bottom top', // End when the bottom of the image reaches the top of the viewport
          scrub: true, // Smooth scrubbing effect
          // markers: true, // Uncomment this line for debugging
        }
      });
    });
  });
  