/* ===== JAVA SCRIPT ===== */
/* ===== HAMBURGER MENU ===== */

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
});

/* ===== SCROLL ANIMATION ===== */

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    observer.observe(sec);
});

/* ===== MOBILE ACTIVE TAB ON SCROLL (SCROLL SPY) ===== */

if (window.innerWidth <= 768) {

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {

let scrollPos = window.scrollY + 140;

sections.forEach(section => {

const top = section.offsetTop;
const bottom = top + section.offsetHeight;
const id = section.getAttribute("id");

if (scrollPos >= top && scrollPos < bottom) {

navLinks.forEach(link => link.classList.remove("active-link"));

const activeLink = document.querySelector(
'.nav-links a[href="#' + id + '"]'
);

if (activeLink) activeLink.classList.add("active-link");

}

});

}

window.addEventListener("scroll", setActiveLink);
setActiveLink();

}
