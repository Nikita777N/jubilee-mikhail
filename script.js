```javascript
/* =====================================
   ОБРАТНЫЙ ОТСЧЁТ
===================================== */

const targetDate = new Date("November 13, 2026 17:45:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();


setInterval(updateCountdown, 1000);


/* =====================================
   ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ ПРОКРУТКЕ
===================================== */

const elements = document.querySelectorAll(
    ".timeline-item, .wish-card, .location-card, .contact-card"
);


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});


/* =====================================
   ПЛАВНОЕ ДВИЖЕНИЕ ПЕРВОГО ЭКРАНА
===================================== */

window.addEventListener("scroll", function() {

    const heroContent =
        document.querySelector(".hero-content");

    if (!heroContent) {
        return;
    }


    const scrollPosition = window.scrollY;

    const screenHeight = window.innerHeight;


    if (scrollPosition < screenHeight) {

        heroContent.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

        heroContent.style.opacity =
            1 - (scrollPosition / screenHeight) * 0.8;

    }

});
```
