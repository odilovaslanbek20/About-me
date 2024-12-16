const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Pastga scroll bo'lsa header yashiriladi
    header.classList.remove('active');
  } else {
    // Yuqoriga scroll bo'lsa header ko'rinadi
    header.classList.add('active');
  }
  lastScrollY = window.scrollY; // Oxirgi scroll joyini yangilash
});