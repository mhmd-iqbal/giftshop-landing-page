const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle');
    burger.classList.toggle('active');
  });
}

navSlide();

function hideLoading() {
  document.getElementById('loading').style.opacity = '0';
  document.getElementById('loading').style.zIndex = '-1';
}

