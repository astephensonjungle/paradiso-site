gsap.to(".header_content", {
    borderRadius: "3rem", // Adjust to your desired value
    scale: 0.95,
    scrollTrigger: {
      trigger: ".header_content",
      start: "top top", // Animation starts when the top of the hero reaches the top of the viewport
      end: "bottom top", // Animation ends when the bottom of the hero reaches the top of the viewport
      scrub: true, // Smooth animation linked to scroll
    }
  });
  
  gsap.from(".header_image", { scale: 0.5, opacity: 0, duration: 2.5, ease: "power3.inOut" })
  
  gsap.to(".horizontal_scroll", {
    x: "-190vw", // Move the child element horizontally (you can change this to 'y' for vertical movement)
    scrollTrigger: {
      trigger: ".section_horizontalscroll",
      start: "top top", // When the parent element reaches the top of the viewport
      end: "bottom bottom", // When the bottom of the parent reaches the top of the viewport
      scrub: true, // Smooth animation tied to the scroll position
    }
  });
  
  gsap.from(".info_text", {
    opacity: 0, // Start from 0 opacity
    y: 50, // Move the text up by 50px
    duration: 1, // Animation duration
    scrollTrigger: {
      trigger: ".info_text", // Element that triggers the animation
      start: "top 90%", // Start when the top of the text hits 80% of the viewport height
      end: "bottom 50%", // End when the bottom of the text reaches 20% of the viewport
      scrub: true, // Smooth animation tied to scroll
    }
  });
  
  const image = document.querySelector(".header_image");
  
  image.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 20 - 10; // Horizontal movement
    const y = (e.clientY / window.innerHeight) * 20 - 10; // Vertical movement
    gsap.to(image, { x: x, y: y, duration: 0.3, ease: "power2.out" });
  });
  
  image.addEventListener("mouseleave", () => {
    gsap.to(image, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
  });
  