// aos
AOS.init({
    once: true
})

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section_links");
    const navLinks = document.querySelectorAll(".menu-list a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 5) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

// copy address
const copybtns = document.querySelectorAll(".copy_address");

copybtns.forEach(copybtn => {

    copybtn.addEventListener("click", function() {
        let parent = copybtn.parentElement;
        let textSpan = parent.querySelector('span');
        let icon = parent.querySelector('.icon');
        let intervalId;
        let addressText = parent.querySelector(".value").getAttribute('data-set');
        textSpan.innerHTML = 'Copied';

        icon.classList.add('active')
        icon.innerHTML = `
     <i class="bi bi-clipboard-check text-white"></i>
    `

        if (intervalId) {
            clearInterval(intervalId);
        }


        navigator.clipboard.writeText(addressText);
    });
})

//    faq
const faq_btns = document.querySelectorAll('.faq_btn');
faq_btns.forEach(faq_btn => {
    faq_btn.addEventListener('click', () => {
        const faq = faq_btn.parentElement
        faq.classList.toggle('active')
    })
})
