const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', function () {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);
      overlay.style.display = 'block';
  
      this.classList.add('zoomed');
  
      overlay.addEventListener('click', () => {
        this.classList.remove('zoomed');
        overlay.remove();
      });
    });
  });
