let home_li = document.querySelector('.header_menu>ul>li:nth-child(1)')
let skills_li = document.querySelector('.header_menu>ul>li:nth-child(2)')
let contact_li = document.querySelector('.header_menu>ul>li:nth-child(3)')
let home_section = document.querySelector('.intro')
let skills_section = document.querySelector('.skills')
let contact_me_section = document.querySelector('.contact_me')

home_li.addEventListener('click', () => {
    const offset = 160
    const y = home_section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
})

skills_li.addEventListener('click', () => {
    const offset = 160
    const y = skills_section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
})

contact_li.addEventListener('click', () => {
    const offset = 160
    const y = contact_me_section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
})

