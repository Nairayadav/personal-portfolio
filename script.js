// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const roles = [
    "Cyber Security Student",
    "GSSoC 2026 Contributor",
    "Python & Flask Developer",
    "Java Programmer",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();


// =========================
// THEME TOGGLE
// =========================

const themeBtn =
    document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        alert(
            "Thank you for contacting me! I'll get back to you soon."
        );

        contactForm.reset();
    }
);


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const sections =
    document.querySelectorAll(".section");

const revealSection = () => {

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (
            sectionTop <
            window.innerHeight - 100
        ) {
            section.classList.add("show");
        }
    });
};

window.addEventListener(
    "scroll",
    revealSection
);

revealSection();


// =========================
// NAVBAR ACTIVE LINK
// =========================

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document
        .querySelectorAll("section")
        .forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.pageYOffset >= sectionTop
            ) {
                current =
                    section.getAttribute("id");
            }
        });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});


// =========================
// PROJECT CARD EFFECT
// =========================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {
            card.style.transform =
                "translateY(-10px)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {
            card.style.transform =
                "translateY(0)";
        }
    );
});


// =========================
// CONSOLE SIGNATURE
// =========================

console.log(`
====================================
 Naira Yadav Portfolio
 Cyber Security | AI | Open Source
====================================
`);