document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAVIGATION
    ========================= */

    const navLinks =
        document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealItems =
        document.querySelectorAll(
            ".rank-card, .clothes-card, .law-group, .promotion-card, .time-card"
        );

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    revealItems.forEach(item => {

        item.classList.add("reveal-item");

        revealObserver.observe(item);

    });


    /* =========================
       ACTIVE NAV ON SCROLL
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
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


    /* =========================
       RED MOUSE GLOW
    ========================= */

    const mouseGlow =
        document.createElement("div");

    mouseGlow.className =
        "mouse-glow";

    mouseGlow.style.cssText = `
        position: fixed;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        transform: translate(-50%, -50%);
        background: radial-gradient(
            circle,
            rgba(150,0,0,.09),
            transparent 68%
        );
        opacity: 0;
        transition: opacity .25s ease;
    `;

    document.body.appendChild(mouseGlow);


    window.addEventListener(
        "mousemove",
        event => {

            mouseGlow.style.left =
                `${event.clientX}px`;

            mouseGlow.style.top =
                `${event.clientY}px`;

            mouseGlow.style.opacity = "1";

        }
    );


    /* =========================
       YEAR
    ========================= */

    const year =
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =========================
       PAGE LOADED
    ========================= */

    document.body.classList.add("loaded");

});