const burger = document.querySelector('.burger');
const container = document.querySelector('.container');
const screens = document.querySelectorAll('.screen');
const header = document.querySelector('.header');


burger.addEventListener('click', () => {
  container.classList.toggle('active')
});


// container.addEventListener('click', (e) => {
//   console.log(e.target);
// });

function replaceBgView(id) {
  const bg = document.getElementById(id);
  screens.forEach(screen => {
    screen.style.display = 'none';
  });
  bg.style.display = 'block';
}

function changeBackground() {
  const links = document.querySelectorAll('.link');
  links.forEach((link, index) => {
    link.addEventListener('mouseenter', (e) => {
      e.preventDefault();
      replaceBgView(e.target.dataset.link);
    });
    link.addEventListener('click', e => {
      e.preventDefault();
      container.classList.toggle('active');
    });
  });
};
changeBackground();