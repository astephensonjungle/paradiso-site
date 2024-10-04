// GSAP animation for work section
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
  const workSection = document.querySelector('.section_work');
  const divs2 = workSection.querySelectorAll('.work_list_item.is_2');
  const div3 = workSection.querySelector('.work_list_item.is_3');

  if (workSection && divs2.length && div3) {
    // Divs with class 'work_list_item is_2' move together
    gsap.to(divs2, {
      y: '41vw',
      scrollTrigger: {
        trigger: workSection,
        start: 'top bottom',
        end: 'bottom 40%',
        scrub: true,
        // markers: true,
      }
    });

    // Div with class 'work_list_item is_3' moves differently
    gsap.to(div3, {
      y: '82vw',
      scrollTrigger: {
        trigger: workSection,
        start: 'top bottom',
        end: 'bottom 40%',
        scrub: true,
        // markers: true,
      }
    });
  } else {
    console.warn('Some elements for the work section animation are missing.');
  }
});

// Hover effect for work items
document.querySelectorAll('.work_item_linkblock').forEach(item => {
  const details = item.querySelector('.work_list_details');
  if (details) {
    item.addEventListener('mouseenter', () => {
      gsap.to(details, {
        paddingBottom: '3rem',
        duration: 0.6,
        ease: 'power2.out'
      });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(details, {
        paddingBottom: '1.5rem',
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  }
});