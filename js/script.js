  document.querySelectorAll('.scroll-to-form').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const form = document.getElementById('enquiryform');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });