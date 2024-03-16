const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');
const boxes = document.querySelectorAll('.box');
const currentLocation = window.location.href || window.location.hash;
const navLinks = document.querySelectorAll('.navbar a');


navLinks.forEach((link) => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
})

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
})

document.onscroll = () => {
    navbar.classList.remove('show');

    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }   else {
        document.querySelector('header').classList.remove('active');
    }
}

document.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }   else {
        document.querySelector('header').classList.remove('active');
    }
}

boxes.forEach(box => {
    const image = box.querySelector('img');
    const preview = document.getElementById('image-preview');
    const previewImage = preview.querySelector('img');

    image.addEventListener('click', () => {
        previewImage.src = image.src;
        preview.style.display = 'flex';
    });

    preview.addEventListener('click', () => {
        preview.style.display = 'none';
    });
});