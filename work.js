
// Make sure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Only run on desktop breakpoint
  const isDesktop = window.matchMedia("(min-width: 992px)").matches;
  
  if (isDesktop) {
    // Select all parent elements
    const parents = document.querySelectorAll(".landing_list_item");

    // Add console.log to check if parent elements are found
    console.log("Parent elements found:", parents.length);

    // Create a timeline for each parent
    parents.forEach((parent, index) => {
      // Create a unique GSAP timeline for each parent
      const tl = gsap.timeline({ paused: true, repeat: -1 });
      
      // Create a timeline for title block
      const titleTl = gsap.timeline({ paused: true });

      // Get the images within this specific parent
      const images = parent.querySelectorAll(".image1, .image2, .image3");
      
      // Get the title block for this parent
      const titleBlock = parent.querySelector(".work_title_block");

      // Build timeline for this parent's images
      images.forEach((image, i) => {
        tl.to(image, { opacity: 1, duration: 0 }) // show image
          .to(image, { opacity: 0, duration: 0, delay: 0.6 }); // hide image after delay
      });

      // Build timeline for title block
      titleTl.to(titleBlock, { opacity: 1, duration: 0 })
             .to(titleBlock, { rotation: -10, duration: 0.4, ease: "power4.out" });

      // Add hover event listeners to this parent element
      parent.addEventListener("mouseenter", () => {
        console.log(`Mouse enter parent ${index} - playing timeline`);
        tl.play();
        titleTl.play();
      });

      parent.addEventListener("mouseleave", () => {
        console.log(`Mouse leave parent ${index} - resetting timeline`);
        tl.pause(0);
        titleTl.reverse();
      });
    });
  }
});

