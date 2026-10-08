// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

    });


    // =========================
    // CLOSE MOBILE MENU
    // WHEN CLICKING A LINK
    // =========================

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

        });

    });

}


// =========================
// PAGE ENTRANCE
// =========================

document.body.style.opacity = "0";
document.body.style.transform = "translateY(8px)";
document.body.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

window.addEventListener("load", function () {

    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";

});


// =========================
// HOME NAVBAR SCROLL
// =========================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 4px 20px rgba(0, 0, 0, 0.05)";

            navbar.style.backdropFilter =
                "blur(18px)";

        } else {

            navbar.style.boxShadow = "none";

            navbar.style.backdropFilter =
                "none";

        }

    });

}


// =========================
// DEPARTMENT NAVBAR SCROLL
// =========================

const departmentNav =
    document.querySelector(".department-nav");

if (departmentNav) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            departmentNav.style.boxShadow =
                "0 4px 20px rgba(0, 0, 0, 0.05)";

            departmentNav.style.backdropFilter =
                "blur(18px)";

        } else {

            departmentNav.style.boxShadow = "none";

            departmentNav.style.backdropFilter =
                "none";

        }

    });

}


// =========================
// HOME HERO SCROLL
// =========================

const heroContent =
    document.querySelector(".hero-content");

if (heroContent) {

    window.addEventListener("scroll", function () {

        const scrollY = window.scrollY;

        heroContent.style.transform =
            `translateY(-${scrollY * 0.25}px)`;

        heroContent.style.opacity =
            Math.max(0, 1 - scrollY / 700);

    });

}


// =========================
// DEPARTMENT HERO SCROLL
// =========================

const departmentHeroContent =
    document.querySelector(".department-hero-content");

if (departmentHeroContent) {

    window.addEventListener("scroll", function () {

        const scrollY = window.scrollY;

        departmentHeroContent.style.transform =
            `translateY(-${scrollY * 0.20}px)`;

        departmentHeroContent.style.opacity =
            Math.max(0, 1 - scrollY / 800);

    });

}


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".department-section-heading, " +
    ".programme-category, " +
    ".department-contact, " +
    ".department-reviews, " +
    ".contact-content"
);

revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


const revealObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// =========================
// PROGRAMME CARD ANIMATION
// =========================

const programmeCards =
    document.querySelectorAll(".programme-card");

programmeCards.forEach(function (card, index) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        `opacity 0.7s ease ${index * 0.08}s,
         transform 0.7s ease ${index * 0.08}s`;

});


const cardObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                cardObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.12

    });


programmeCards.forEach(function (card) {

    cardObserver.observe(card);

});


// =========================
// REVIEW CARD ANIMATION
// =========================

const reviewCards =
    document.querySelectorAll(".review-card");

reviewCards.forEach(function (card, index) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        `opacity 0.7s ease ${index * 0.12}s,
         transform 0.7s ease ${index * 0.12}s`;

});


const reviewObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                reviewObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });


reviewCards.forEach(function (card) {

    reviewObserver.observe(card);

});


// =========================
// IMAGE HOVER EFFECT
// =========================

const programmeImages =
    document.querySelectorAll(".programme-image img");

programmeImages.forEach(function (image) {

    image.style.transition =
        "transform 0.6s ease";

    const card = image.closest(".programme-card");

    if (card) {

        card.addEventListener("mouseenter", function () {

            image.style.transform =
                "scale(1.04)";

        });

        card.addEventListener("mouseleave", function () {

            image.style.transform =
                "scale(1)";

        });

    }

});


// =========================
// SMOOTH ANCHOR SCROLL
// =========================

const anchorLinks =
    document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


// =========================
// NUMBER COUNTER
// =========================

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter =
                    entry.target;

                const target =
                    Number(counter.dataset.target);

                let start = 0;

                const duration = 1200;

                const startTime =
                    performance.now();


                function updateCounter(currentTime) {

                    const progress =
                        Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );


                    // Smooth easing

                    const easedProgress =
                        1 - Math.pow(
                            1 - progress,
                            3
                        );


                    const value =
                        Math.floor(
                            easedProgress * target
                        );


                    if (
                        counter.textContent
                            .includes("%")
                    ) {

                        counter.textContent =
                            value + "%";

                    } else {

                        counter.textContent =
                            value + "+";

                    }


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        if (
                            counter.dataset.target ===
                            "80"
                        ) {

                            counter.textContent =
                                "80%";

                        }

                        if (
                            counter.dataset.target ===
                            "20"
                        ) {

                            counter.textContent =
                                "20%";

                        }

                        if (
                            counter.dataset.target ===
                            "16"
                        ) {

                            counter.textContent =
                                "16+";

                        }

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );


                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.6
        }
    );


counters.forEach(function (counter) {

    counterObserver.observe(counter);

});


// =========================
// PAGE TRANSITION
// =========================

const pageLinks =
    document.querySelectorAll("a");


pageLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const href =
            link.getAttribute("href");


        // Ignore empty links

        if (!href || href === "#") {
            return;
        }


        // Ignore external links

        if (
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:")
        ) {
            return;
        }


        // Ignore same-page anchors

        if (href.startsWith("#")) {
            return;
        }


        event.preventDefault();


        // Close mobile menu

        if (mobileMenu) {

            mobileMenu.classList.remove(
                "active"
            );

        }


        // Fade out current page

        document.body.style.opacity = "0";

        document.body.style.transform =
            "translateY(-8px)";


        // Open new page

        setTimeout(function () {

            window.location.href = href;

        }, 500);

    });

});


// =========================
// REDUCED MOTION SUPPORT
// =========================

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (prefersReducedMotion.matches) {

    document.documentElement.style.scrollBehavior =
        "auto";

}