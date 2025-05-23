  document.querySelectorAll('.scroll-to-form').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const form = document.getElementById('enquiryform');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  $('.home-slider').owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  dots: true,
  smartSpeed: 1000,
  mouseDrag: true,
  touchDrag: window.innerWidth > 768, 
  responsive: {
    0: { touchDrag: false },
    768: { touchDrag: true }
  }
});