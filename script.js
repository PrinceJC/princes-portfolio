/* ========================================
   RESET
======================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    background: #f8f7f4;
    color: #171717;
}


/* ========================================
   GENERAL
======================================== */

.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
}


.section {
    padding: 100px 0;
}


.section-alt {
    background: #eeeae3;
}


.section-label {
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 15px;
}


h1,
h2,
h3 {
    line-height: 1.2;
}


h2 {
    font-size: 42px;
    margin-bottom: 50px;
}


/* ========================================
   NAVIGATION
======================================== */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(248, 247, 244, 0.95);
    border-bottom: 1px solid #ddd8d0;
    z-index: 1000;
}


.nav-container {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.logo {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #171717;
    color: white;

    text-decoration: none;
    font-weight: bold;
    border-radius: 50%;
}


nav {
    display: flex;
    gap: 25px;
}


nav a {
    color: #171717;
    text-decoration: none;
    font-size: 14px;
}


nav a:hover {
    text-decoration: underline;
}


/* ========================================
   HERO
======================================== */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding-top: 75px;
}


.hero-content {
    max-width: 800px;
}


.eyebrow {
    font-size: 13px;
    letter-spacing: 3px;
    font-weight: bold;
    margin-bottom: 25px;
}


.hero h1 {
    font-size: clamp(50px, 8vw, 90px);
    margin-bottom: 30px;
}


.hero h1 span {
    display: block;
}


.hero-description {
    max-width: 650px;
    font-size: 20px;
    color: #555;
    margin-bottom: 40px;
}


/* ========================================
   BUTTONS
======================================== */

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}


.btn {
    display: inline-block;
    padding: 14px 25px;

    text-decoration: none;
    font-weight: bold;

    transition: 0.2s ease;
}


.btn-primary {
    background: #171717;
    color: white;
}


.btn-primary:hover {
    transform: translateY(-2px);
}


.btn-secondary {
    border: 1px solid #171717;
    color: #171717;
}


.btn-secondary:hover {
    background: #171717;
    color: white;
}


/* ========================================
   ABOUT
======================================== */

.about-content {
    max-width: 750px;
}


.about-content p {
    font-size: 19px;
    color: #555;
    margin-bottom: 20px;
}


/* ========================================
   SKILLS
======================================== */

.skills-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 20px;
}


.skill-card {
    background: #f8f7f4;

    padding: 35px;

    border: 1px solid #ddd8d0;
}


.skill-card h3 {
    margin-bottom: 15px;
    font-size: 22px;
}


.skill-card p {
    color: #666;
}


/* ========================================
   EXPERIENCE
======================================== */

.timeline {
    max-width: 800px;
}


.timeline-item {
    border-left: 2px solid #171717;

    padding-left: 30px;
    padding-bottom: 50px;

    position: relative;
}


.timeline-item::before {
    content: "";

    width: 10px;
    height: 10px;

    background: #171717;

    border-radius: 50%;

    position: absolute;

    left: -6px;
    top: 5px;
}


.timeline-date {
    display: block;

    font-size: 13px;
    font-weight: bold;

    letter-spacing: 1px;

    margin-bottom: 10px;
}


.timeline-item h3 {
    font-size: 25px;
    margin-bottom: 5px;
}


.timeline-item h4 {
    font-weight: normal;
    color: #666;
    margin-bottom: 15px;
}


.timeline-item p {
    color: #555;
}


/* ========================================
   PROJECTS
======================================== */

.projects-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 30px;
}


.project-card {
    background: #f8f7f4;

    border: 1px solid #ddd8d0;

    overflow: hidden;
}


.project-image {
    height: 230px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #171717;

    color: white;
}


.project-placeholder {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 3px;
}


.project-content {
    padding: 30px;
}


.project-type {
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: bold;

    margin-bottom: 10px;
}


.project-content h3 {
    font-size: 28px;
    margin-bottom: 15px;
}


.project-content > p:not(.project-type) {
    color: #666;
    margin-bottom: 20px;
}


.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    margin-bottom: 25px;
}


.project-tech span {
    padding: 5px 10px;

    background: #e5e1da;

    font-size: 12px;
}


.project-links {
    display: flex;
    gap: 20px;
}


.project-links a {
    color: #171717;
    font-weight: bold;
    text-decoration: none;
}


.project-links a:hover {
    text-decoration: underline;
}


/* ========================================
   CONTACT
======================================== */

.contact-section {
    text-align: center;
}


.contact-section h2 {
    margin-bottom: 20px;
}


.contact-description {
    max-width: 600px;

    margin: 0 auto 30px;

    color: #666;
    font-size: 18px;
}


/* ========================================
   FOOTER
======================================== */

footer {
    padding: 30px 0;

    background: #171717;
    color: #aaa;

    text-align: center;

    font-size: 13px;
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

    nav {
        display: none;
    }


    .section {
        padding: 70px 0;
    }


    h2 {
        font-size: 34px;
    }


    .hero h1 {
        font-size: 55px;
    }


    .hero-description {
        font-size: 18px;
    }


    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }


    .project-image {
        height: 200px;
    }

}