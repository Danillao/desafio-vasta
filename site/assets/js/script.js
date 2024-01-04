/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');


function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(let i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills);
})



/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');


tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        });

        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        });

        tab.classList.add('qualification__active')
    })
})



/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})



/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },
});



/*==================== TESTIMONIAL ====================*/
let swiperTestimonal = new Swiper('.testimonal__container', {
    loop: true,
    grabCursor: true,
   
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568:{
            slidesPerView: 2,
        }
    }
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= (sectionTop + sectionHeight)) {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link')
        }else {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)



/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
    const nav = document.getElementById('header');

    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader);



/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp);



/*==================== ALTER COLOR PAGE ====================*/ 


// const buttonPurple = document.getElementById('btn-purple'),
//       buttonGreen = document.getElementById('btn-green'),
//       buttonRed = document.getElementById('btn-red');

// // Ativa / Desativa a cor manualmente com o botão
//  buttonPurple.addEventListener('click', () => {
//     // Add a cor purple
//     document.documentElement.style.setProperty('--hue-color', 250)
//  })

// // Ativa / Desativa a cor manualmente com o botão
//  buttonGreen.addEventListener('click', () => {
//     // Add a cor green
//     document.documentElement.style.setProperty('--hue-color', 165)
// })

// // Ativa / Desativa a cor manualmente com o botão
// buttonRed.addEventListener('click', () => {
//     // Add a cor red
//     document.documentElement.style.setProperty('--hue-color', 0)
// })



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-lightbulb-alt'
const logo = document.getElementById('logo')
let logoState = 'light'; // 'light' ou 'dark'


// Tópico selecionado anteriormente (Caso usuario selecione)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-lightbulb-alt'

// Validamos se o usuário já escolheu um tópico
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos qual foi o tema para saber se ativamos ou desativamos o Dark-mode
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    
}
    
// Ativa / Desativa o tema manualmente com o botão
themeButton.addEventListener('click', () => {

    // Add ou remove o tema escuro / ícone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvando o tema e o ícone atual que o usuário escolheu
    logoState = localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

    //mudando imagem da logo
     console.log(selectedTheme)

    if (logo.getAttribute('data-theme') == 'light') {
        logo.setAttribute('src', 'assets/images/logo-dark.png');
        logo.setAttribute('data-theme', 'dark');
    } else if(logo.getAttribute('data-theme') == 'dark') {
        logo.setAttribute('src', 'assets/images/logo-light.png');
        logo.setAttribute('data-theme', 'light');
    }

})





/*==================== TYPING NAME ANIMATION ====================*/ 
var typed = new Typed(".typing", {
    strings: [
        "Software House",
        "Especialistas",
        "A Sua Melhor Solução"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: [
        "Software House",
        "Especialistas",
        "A Sua Melhor Solução"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


