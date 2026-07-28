/* ==========================================================
   BRIGADE PLUS
   MAIN JAVASCRIPT
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       Sticky Navigation
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 60) {

            navbar.style.background = "rgba(255,255,255,0.96)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            navbar.style.background = "rgba(255,255,255,.82)";
            navbar.style.boxShadow = "none";

        }

    });

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       Counter Animation
    ========================== */

    const counters = document.querySelectorAll(".stat-box h2");

    const animateCounter = (counter) => {

        let target = counter.innerText;

        let number = parseInt(target.replace(/\D/g, ""));

        let suffix = target.replace(/[0-9]/g, "");

        let count = 0;

        let speed = Math.ceil(number / 100);

        let interval = setInterval(() => {

            count += speed;

            if (count >= number) {

                count = number;

                clearInterval(interval);

            }

            counter.innerText = count + suffix;

        }, 20);

    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

    /* ==========================
       Scroll Reveal
    ========================== */

    const reveals = document.querySelectorAll(

        ".service-card, .experience-box, .featured-card"

    );

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.2

    });

    reveals.forEach(item => {

        item.style.opacity = "0";

        item.style.transform = "translateY(60px)";

        item.style.transition = "all .8s ease";

        revealObserver.observe(item);

    });

    /* ==========================
       Mobile Menu
    ========================== */

    const hamburger = document.querySelector(".hamburger");

    const menu = document.querySelector(".nav-menu");

    if (hamburger) {

        hamburger.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

    }

});
