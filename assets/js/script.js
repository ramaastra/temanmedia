const header = document.querySelector('header');
const nav = document.querySelector('nav ul');
const navLists = document.querySelectorAll('nav ul li a');
const articles = document.querySelectorAll('article');
const cardWrapper = document.querySelector('.card-wrapper');
const cards = document.querySelectorAll('.card');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const headerHeight = header.offsetHeight;

// Adding active navigation style
const activateNav = (nav) => {
  navLists.forEach((list) => list.classList.remove('active'));
  nav.classList.add('active');
}

// Event to trigger scrolling navigation style
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolling-active', window.scrollY > 0);
});

// Event to trigger active navigation style
window.addEventListener('scroll', () => {
  articles.forEach(article => {
    let top = window.scrollY;
    let offset = article.offsetTop;
    let height = article.offsetHeight;
    let id = article.getAttribute('id');

    if (top + headerHeight * 2 >= offset && top < offset + height) {
      const target = document.querySelector(`[href="#${id}"]`);
      activateNav(target);
    } else if (top === 0) {
      navLists.forEach((list) => list.classList.remove('active'));
    }
  })
});

// Event to trigger mobile navigation
hamburger.addEventListener('click', () => {
  if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
    hamburger.childNodes[1].src = 'assets/images/hamburger.svg';
  } else {
    mobileNav.style.display = 'block';
    hamburger.childNodes[1].src = 'assets/images/cross.svg';
  }
});