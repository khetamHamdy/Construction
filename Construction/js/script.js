let nav = document.querySelector('.header .navbar');
let contact_info = document.querySelector('.contact-info');
let search_form = document.querySelector('.header .search-form');
let login_form = document.querySelector('.header .login-form');


let sp = document.querySelector(".up");
window.onscroll = function () {
    //console.log(this.screenY);
    if (this.screenY >= 0) {
        sp.classList.add("show");
    } else {
        sp.classList.remove("show");
    }
};
sp.onclick = function () {
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
}

//menu
document.querySelector('#menu-btn').onclick = () => {
    nav.classList.toggle('active');
    search_form.classList.remove('active');
}
//information
document.querySelector('#info-btn').onclick = () => {
    contact_info.classList.toggle('active');
    search_form.classList.remove('active');
    login_form.classList.remove('active');
    nav.classList.remove('active');
}
//search
document.querySelector('#search-btn').onclick = () => {
    search_form.classList.toggle('active');
    nav.classList.remove('active');
    login_form.classList.remove('active');
    contact_info.classList.remove('active');
}
//login
document.querySelector('#login-btn').onclick = () => {
    login_form.classList.toggle('active');
    nav.classList.remove('active');
    search_form.classList.remove('active');
    contact_info.classList.remove('active');
}

document.querySelector('#close-contact-info').onclick = () => {
    contact_info.classList.remove('active');
}
window.onscroll = () => {
    nav.classList.remove('active');
    search_form.classList.remove('active');
    login_form.classList.remove('active');
    contact_info.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});