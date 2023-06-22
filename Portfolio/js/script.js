// Show Menu
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

    //Menu Show (Validate if constant exist)
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
    //Menu hidden (Validate if constant exist)
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
    //Remove menu on Mobile
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Swiper project
let swiperProjects = new Swiper(".projects_container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
   breakpoints: {
    1200: {
        slidesPerView: 2,
        spaceBetween: -56,
    },
},
});

// Testimonial Swiper
let swiperTestimonial = new Swiper(".testimonial_container", {
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Email Js
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault()

        //Check if the field has a value
        if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
            //Add and remove color
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')

            //Show message
            contactMessage.textContent = 'Write all the input fields 📩'
        } else {
            // Service - templateID - #form - publicKey
            emailjs.sendForm('service_tu7yr8i','template_3a2eht4','#contact-form','8rzF9kOKxDFSrD70G')
                .then(() => {
                    //send message and add color
                    contactMessage.classList.add('color-blue')
                    contactMessage.textContent = 'Message sent✅💌'

                    //Remove message after 5secs
                    setTimeout(() => {
                        contactMessage.textContent = ''
                    }, 5000)
                }, (error) => {
                    alert('OOPS! SOMETHING WENT WRONG...', error)
                })

                //To clear the inut field
                contactName.value = ''
                contactEmail.value = ''
                contactProject.value = ''
        }
    }
    contactForm.addEventListener('submit', sendEmail)

    // Scroll Section Active Link
const sections = document.querySelectorAll('section[id]')
    
    const scrollActive = () =>{
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }                                                    
        })
    }
    window.addEventListener('scroll', scrollActive)

    // Scroll Up
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Dark Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Change Bckground Header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400,
    reset: true  /* animation reset */
})

sr.reveal(`.home_data, .projects_container, .testimonial_container, .footer_container`)
sr.reveal(`.home_info div`, { delay: 600, origin: 'bottom', interval: 600})
sr.reveal(`.skills_content:nth-child(1), .contact_content:nth-child(1)`, { origin: 'left' })
sr.reveal(`.skills_content:nth-child(2), .contact_content:nth-child(2)`, { origin: 'right' })
sr.reveal(`.qualification_content, .services_card`, { interval: 100 })
