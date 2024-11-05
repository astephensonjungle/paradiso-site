gsap.to(".scroller_content.is_small", {
  x: "-50vw", // Move 100vw left
  repeat: -1, // Infinite repeat
  duration: 10, // Adjust duration as needed
  ease: "none", // Linear movement
  onRepeat: () => {
    gsap.set(".scroller_content", {x: 0}); // Reset position to start
  }
});