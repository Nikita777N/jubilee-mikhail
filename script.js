```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --black: #151210;
    --dark: #1d1815;
    --brown: #2a211c;
    --champagne: #f4e5ca;
    --gold: #c9a45c;
    --gold-light: #ead19a;
    --cream: #f8efe1;
    --muted: #b5a898;
}

html {
    scroll-behavior: smooth;
}

body {
    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(201, 164, 92, 0.15),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #151210 0%,
            #211914 45%,
            #110f0d 100%
        );

    color: var(--cream);

    font-family: "Montserrat", sans-serif;

    font-weight: 300;

    overflow-x: hidden;
}


/* ФОН */

body::before {
    content: "";

    position: fixed;

    inset: 0;

    pointer-events: none;

    opacity: 0.08;

    background-image:
        radial-gradient(
            rgba(255,255,255,0.8) 0.5px,
            transparent 0.5px
        );

    background-size: 5px 5px;

    z-index: 20;
}

.glow {
    position: fixed;

    width: 450px;
    height: 450px;

    border-radius: 50%;

    filter: blur(100px);

    pointer-events: none;

    z-index: -1;
}

.glow-one {
    top: 15%;
    left: -250px;

    background: rgba(150, 83, 38, 0.18);
}

.glow-two {
    top: 55%;
    right: -250px;

    background: rgba(201, 164, 92, 0.12);
}


/* ССЫЛКИ */

a {
    color: inherit;
    text-decoration: none;
}


/* HERO */

.hero {
    min-height: 100svh;

    display: flex;

    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 50px 20px;

    position: relative;

    background:
        radial-gradient(
            ellipse at center,
            rgba(201, 164, 92, 0.14),
            transparent 60%
        );
}

.hero-content {
    width: 100%;
    max-width: 850px;

    animation: fadeUp 1.2s ease;
}

.eyebrow {
    color: var(--gold-light);

    font-size: 10px;

    letter-spacing: 6px;

    margin-bottom: 25px;
}

.gold-line {
    width: 60px;

    height: 1px;

    background:
        linear-gradient(
            to right,
            transparent,
            var(--gold),
            transparent
        );

    margin: 20px auto 30px;
}

.hero h1 {
    font-family: "Cormorant Garamond", serif;

    font-weight: 300;

    font-size: clamp(72px, 14vw, 150px);

    line-height: 0.78;

    letter-spacing: -3px;
}

.hero h1 span {
    display: block;

    color: var(--gold-light);

    font-style: italic;

    margin-top: 12px;
}

.hero-greeting {
    margin-top: 55px;

    font-family: "Cormorant Garamond", serif;

    font-size: 32px;

    color: var(--cream);
}

.hero-description {
    margin-top: 10px;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.8;
}


/* ДАТА */

.date-box {
    display: inline-flex;

    align-items: center;

    margin-top: 50px;

    padding: 20px 30px;

    border-top: 1px solid rgba(201,164,92,0.5);

    border-bottom: 1px solid rgba(201,164,92,0.5);

    background: rgba(255,255,255,0.025);

    box-shadow:
        0 15px 50px rgba(0,0,0,0.25);
}

.date-number {
    font-family: "Cormorant Garamond", serif;

    color: var(--gold-light);

    font-size: 65px;

    line-height: 0.8;

    padding-right: 25px;

    border-right: 1px solid rgba(201,164,92,0.3);
}

.date-info {
    text-align: left;

    padding-left: 25px;
}

.date-info strong {
    display: block;

    font-size: 13px;

    letter-spacing: 3px;
}

.date-info span {
    display: block;

    margin-top: 7px;

    font-size: 9px;

    letter-spacing: 4px;

    color: var(--gold);
}


/* SCROLL */

.scroll-hint {
    margin-top: 75px;

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 12px;

    color: #8e8172;

    font-size: 8px;

    letter-spacing: 4px;
}

.scroll-line {
    width: 1px;

    height: 45px;

    background:
        linear-gradient(
            to bottom,
            var(--gold),
            transparent
        );
}


/* ОБРАТНЫЙ ОТСЧЁТ */

.countdown-section {
    padding: 90px 20px;

    text-align: center;

    background:
        linear-gradient(
            180deg,
            rgba(201,164,92,0.08),
            rgba(255,255,255,0.015)
        );

    border-top: 1px solid rgba(201,164,92,0.12);

    border-bottom: 1px solid rgba(201,164,92,0.12);
}

.section-label {
    color: var(--gold);

    font-size: 9px;

    letter-spacing: 4px;
}

.countdown-section h2 {
    margin-top: 12px;

    font-family: "Cormorant Garamond", serif;

    font-size: clamp(45px, 8vw, 70px);

    font-weight: 300;
}

.countdown {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 15px;

    margin-top: 35px;
}

.countdown-item {
    min-width: 100px;
}

.countdown-item div {
    font-family: "Cormorant Garamond", serif;

    font-size: 55px;

    color: var(--gold-light);

    line-height: 1;
}

.countdown-item span {
    display: block;

    margin-top: 8px;

    font-size: 8px;

    letter-spacing: 3px;

    color: var(--muted);
}

.countdown-separator {
    font-family: "Cormorant Garamond", serif;

    font-size: 35px;

    color: var(--gold);

    margin-bottom: 15px;
}

.countdown-note {
    margin-top: 30px;

    color: var(--muted);

    font-size: 10px;

    letter-spacing: 3px;
}


/* СЕКЦИИ */

.section {
    width: 100%;

    max-width: 950px;

    margin: 0 auto;

    padding: 125px 25px;
}

.section-title {
    text-align: center;

    margin-bottom: 75px;
}

.section-title > span {
    color: var(--gold);

    font-size: 9px;

    letter-spacing: 4px;
}

.section-title h2 {
    font-family: "Cormorant Garamond", serif;

    font-size: clamp(52px, 9vw, 82px);

    font-weight: 300;

    line-height: 0.95;

    margin-top: 12px;
}

.section-title h2 em {
    color: var(--gold-light);

    font-style: italic;
}


/* ТАЙМИНГ */

.timeline {
    max-width: 760px;

    margin: auto;

    position: relative;
}

.timeline::before {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;

    left: 106px;

    width: 1px;

    background:
        linear-gradient(
            to bottom,
            transparent,
            rgba(201,164,92,0.5),
            transparent
        );
}

.timeline-item {
    display: grid;

    grid-template-columns: 80px 52px 1fr;

    gap: 0;

    margin-bottom: 60px;

    position: relative;
}

.time {
    font-family: "Cormorant Garamond", serif;

    font-size: 28px;

    color: var(--gold-light);

    text-align: right;

    padding-top: 2px;
}

.timeline-marker {
    position: relative;

    display: flex;

    justify-content: center;
}

.timeline-marker div {
    width: 11px;
    height: 11px;

    border: 1px solid var(--gold);

    background: var(--black);

    border-radius: 50%;

    margin-top: 10px;

    z-index: 2;

    box-shadow:
        0 0 15px rgba(201,164,92,0.3);
}

.event h3 {
    font-family: "Cormorant Garamond", serif;

    font-size: 32px;

    font-weight: 400;
}

.event p {
    margin-top: 8px;

    max-width: 430px;

    color: var(--muted);

    font-size: 12px;

    line-height: 1.8;
}


/* ПОЖЕЛАНИЯ */

.wishes-section {
    max-width: 900px;
}

.wish-card {
    position: relative;

    padding: 65px 55px;

    text-align: center;

    background:
        linear-gradient(
            135deg,
            rgba(201,164,92,0.12),
            rgba(255,255,255,0.025)
        );

    border: 1px solid rgba(201,164,92,0.28);

    box-shadow:
        0 25px 80px rgba(0,0,0,0.25);
}

.wish-decoration {
    color: var(--gold);

    font-size: 22px;
}

.wish-card h3 {
    margin: 25px 0;

    font-family: "Cormorant Garamond", serif;

    font-size: 40px;

    font-weight: 400;
}

.important-text {
    max-width: 650px;

    margin: auto;

    color: var(--cream);

    font-size: 17px;

    line-height: 1.8;
}

.wish-highlight {
    max-width: 620px;

    margin: 30px auto 0;

    padding: 22px;

    background: rgba(201,164,92,0.08);

    border-left: 2px solid var(--gold);

    color: var(--champagne);

    font-size: 15px;

    line-height: 1.8;
}

.wish-highlight strong {
    color: var(--gold-light);

    font-weight: 500;
}

.wish-decoration.bottom {
    margin-top: 35px;
}


/* МЕСТО */

.location-card {
    padding: 70px 30px;

    text-align: center;

    border: 1px solid rgba(201,164,92,0.25);

    background:
        rgba(255,255,255,0.02);

    box-shadow:
        0 25px 70px rgba(0,0,0,0.2);
}

.location-symbol {
    color: var(--gold);

    font-size: 30px;

    margin-bottom: 25px;
}

.address {
    font-family: "Cormorant Garamond", serif;

    font-size: 29px;

    line-height: 1.5;

    color: var(--cream);
}

.map-button {
    display: inline-block;

    margin-top: 35px;

    padding: 15px 30px;

    border: 1px solid var(--gold);

    color: var(--gold-light);

    font-size: 9px;

    letter-spacing: 2px;

    transition: 0.3s;
}

.map-button:hover {
    background: var(--gold);

    color: var(--black);
}

.adult-note {
    max-width: 650px;

    margin: 30px auto 0;

    text-align: center;

    color: var(--muted);

    font-size: 11px;

    line-height: 1.8;
}

.adult-note span {
    color: var(--gold);

    padding: 0 6px;
}


/* КОНТАКТЫ */

.contacts {
    max-width: 750px;

    margin: auto;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 20px;
}

.contact-card {
    display: flex;

    align-items: center;

    gap: 20px;

    padding: 30px;

    background:
        rgba(255,255,255,0.025);

    border: 1px solid rgba(201,164,92,0.2);

    transition: 0.3s;
}

.contact-card:hover {
    border-color: var(--gold);

    transform: translateY(-4px);
}

.contact-icon {
    font-size: 23px;
}

.contact-info small {
    display: block;

    color: var(--gold);

    font-size: 8px;

    letter-spacing: 3px;

    margin-bottom: 6px;
}

.contact-info strong {
    display: block;

    font-family: "Cormorant Garamond", serif;

    font-size: 27px;

    font-weight: 400;
}

.contact-info p {
    margin-top: 5px;

    color: var(--muted);

    font-size: 11px;
}

.questions {
    text-align: center;

    margin-top: 40px;

    color: var(--muted);

    font-family: "Cormorant Garamond", serif;

    font-size: 22px;

    font-style: italic;
}


/* ФИНАЛ */

.final-section {
    min-height: 75vh;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding: 100px 20px;

    background:
        radial-gradient(
            ellipse at center,
            rgba(201,164,92,0.12),
            transparent 65%
        );
}

.final-content > p {
    color: var(--gold);

    font-size: 9px;

    letter-spacing: 6px;
}

.final-content h2 {
    margin: 30px 0 45px;

    font-family: "Cormorant Garamond", serif;

    font-size: clamp(65px, 12vw, 125px);

    font-weight: 300;

    line-height: 0.82;
}

.final-content h2 span {
    color: var(--gold-light);

    font-style: italic;
}

.final-date {
    color: var(--muted);

    font-size: 10px;

    letter-spacing: 5px;
}


/* FOOTER */

footer {
    padding: 30px 20px;

    text-align: center;

    border-top: 1px solid rgba(255,255,255,0.06);

    color: #766d63;

    font-size: 9px;

    letter-spacing: 2px;
}

footer span {
    display: block;

    margin-top: 10px;

    color: var(--gold);
}


/* АНИМАЦИЯ */

@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* МОБИЛЬНЫЙ ТЕЛЕФОН */

@media (max-width: 650px) {

    .hero {
        padding: 40px 18px;
    }

    .hero h1 {
        font-size: 76px;

        letter-spacing: -2px;
    }

    .hero-greeting {
        margin-top: 45px;

        font-size: 27px;
    }

    .hero-description {
        font-size: 12px;
    }

    .date-box {
        margin-top: 40px;

        padding: 17px 20px;
    }

    .date-number {
        font-size: 52px;

        padding-right: 18px;
    }

    .date-info {
        padding-left: 18px;
    }

    .date-info strong {
        font-size: 10px;

        letter-spacing: 2px;
    }

    .date-info span {
        font-size: 8px;

        letter-spacing: 3px;
    }

    .scroll-hint {
        margin-top: 60px;
    }


    /* COUNTDOWN */

    .countdown-section {
        padding: 75px 12px;
    }

    .countdown {
        gap: 4px;
    }

    .countdown-item {
        min-width: 68px;
    }

    .countdown-item div {
        font-size: 38px;
    }

    .countdown-item span {
        font-size: 7px;

        letter-spacing: 1.5px;
    }

    .countdown-separator {
        font-size: 23px;

        margin-bottom: 12px;
    }

    .countdown-note {
        font-size: 8px;

        letter-spacing: 2px;
    }


    /* SECTIONS */

    .section {
        padding: 90px 18px;
    }

    .section-title {
        margin-bottom: 60px;
    }


    /* TIMELINE */

    .timeline::before {
        left: 67px;
    }

    .timeline-item {
        grid-template-columns: 52px 30px 1fr;

        margin-bottom: 48px;
    }

    .time {
        font-size: 21px;
    }

    .event h3 {
        font-size: 26px;
    }

    .event p {
        font-size: 11px;
    }


    /* WISHES */

    .wish-card {
        padding: 45px 20px;
    }

    .wish-card h3 {
        font-size: 34px;
    }

    .important-text {
        font-size: 15px;
    }

    .wish-highlight {
        font-size: 13px;

        padding: 18px;
    }


    /* LOCATION */

    .location-card {
        padding: 50px 20px;
    }

    .address {
        font-size: 23px;
    }

    .map-button {
        width: 100%;

        padding: 15px 10px;
    }


    /* CONTACTS */

    .contacts {
        grid-template-columns: 1fr;
    }

    .contact-card {
        padding: 25px;
    }


    /* FINAL */

    .final-section {
        min-height: 70vh;
    }

    .final-content h2 {
        font-size: 72px;
    }

}
```
