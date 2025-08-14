const sectionsInPage = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

console.log(navLinks);

const observerSection = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            navLinks.forEach(nav => nav.classList.remove("selectedHeader"));
            document.querySelector(`#link-${entry.target.id}`).classList.add('selectedHeader')
        }
    })
}, {threshold: 0.8});

sectionsInPage.forEach(section => observerSection.observe(section));