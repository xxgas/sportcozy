const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Toggle menu saat tombol hamburger diklik
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Tutup menu otomatis saat salah satu link diklik
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);