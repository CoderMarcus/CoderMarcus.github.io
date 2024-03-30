const carousel = document.querySelector('.carousel');
carousel.addEventListener('scroll', updateCarousel);
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const offset = item.offsetLeft - carousel.scrollLeft;
      item.style.transform = `translateY(${offset / 3}px)`;
    }
  }

function scrollTo(target, duration) {
  const start = carousel.scrollLeft;
  const distance = target - start;
  let currentTime = 0;
  const increment = 20;

  function animateScroll() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, distance, duration);
    carousel.scrollLeft = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  animateScroll();
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

items.forEach(item => {
    item.addEventListener('click', () => {
      scrollTo(item.offsetLeft, 500);
    });
  });
  