const home = document.querySelector('#home');
const about = document.querySelector('#about');
const services = document.querySelector('#services');
const gallery = document.querySelector('#gallery');
const blog = document.querySelector('#blog');
const contact = document.querySelector('#contact');

const homeNav = document.querySelector('#homeNav');
const aboutNav = document.querySelector('#aboutNav');
const servicesNav = document.querySelector('#servicesNav');
const galleryNav = document.querySelector('#galleryNav');
const blogNav = document.querySelector('#blogNav');
const contactNav = document.querySelector('#contactNav');

const mobileViewport = window.matchMedia("screen and (max-width: 600px)");

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
    if(mobileViewport.matches) {
        const currentScrollPos = window.pageYOffset;
        if(prevScrollPos > currentScrollPos) {
            document.querySelector('.navbar').style.top = '0';
        } else {
            document.querySelector('.navbar').style.top = '-10rem';
        }
    
        prevScrollPos = currentScrollPos;
    }

    if(window.scrollY + 100 >= home.offsetTop && window.scrollY + 100 <= (home.offsetTop + home.offsetHeight)) {
        homeNav.style.borderTop = '2px solid orangered';
    } else {
        homeNav.style.borderTop = 'none';
    }

    if(window.scrollY + 100 >= about.offsetTop && window.scrollY + 100 <= (about.offsetTop + about.offsetHeight)) {
        aboutNav.style.borderTop = '2px solid orangered';
    } else {
        aboutNav.style.borderTop = 'none';
    }

    if(window.scrollY + 100 >= services.offsetTop && window.scrollY + 100 <= (services.offsetTop + services.offsetHeight)) {
        servicesNav.style.borderTop = '2px solid orangered';
    } else {
        servicesNav.style.borderTop = 'none';
    }

    if(window.scrollY + 100 >= gallery.offsetTop && window.scrollY + 100 <= (gallery.offsetTop + gallery.offsetHeight)) {
        galleryNav.style.borderTop = '2px solid orangered';
    } else {
        galleryNav.style.borderTop = 'none';
    }

    if(window.scrollY + 100 >= blog.offsetTop && window.scrollY + 100 <= (blog.offsetTop + blog.offsetHeight)) {
        blogNav.style.borderTop = '2px solid orangered';
    } else {
        blogNav.style.borderTop = 'none';
    }

    if(window.scrollY + 100 >= contact.offsetTop && window.scrollY + 100 <= (contact.offsetTop + contact.offsetHeight)) {
        contactNav.style.borderTop = '2px solid orangered';
    } else {
        contactNav.style.borderTop = 'none';
    }

}

window.addEventListener('load', () => {
    document.body.classList.remove('preload');
})
