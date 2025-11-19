const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav ul");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// end header
// start hero
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  const content = document.querySelector(".hero-content");

  // تشغيل انيميشن الخلفية
  hero.classList.add("show-bg");

  // تشغيل انيميشن النص
  setTimeout(() => {
    content.classList.add("show-text");
  }, 300);
});

// end hero
// start about
// إظهار الأنيميشن عند ظهور القسم في الشاشة
const aboutSection = document.querySelector(".about");
const aboutText = document.querySelector(".about-text");
const aboutImg = document.querySelector(".about-img");

function handleAboutAnimation() {
  const rect = aboutSection.getBoundingClientRect();
  
  if (rect.top < window.innerHeight - 150) {
    aboutText.classList.add("show");
    aboutImg.classList.add("show");
    window.removeEventListener("scroll", handleAboutAnimation); 
  }
}

window.addEventListener("scroll", handleAboutAnimation);

// end about


// start services
// عرض البطاقة عند الوصول للقسم
const serviceCards = document.querySelectorAll(".service-card");

function revealServices() {
  serviceCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealServices);
window.addEventListener("load", revealServices);

// end services
// start Our News
// انيميشن عند Scroll لبطاقات الأخبار
const newsCards = document.querySelectorAll(".news-card");

function revealNews() {
  newsCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealNews);
window.addEventListener("load", revealNews);

// end Our News
// start projects
// Animation Staggered عند Scroll
const projectCards = document.querySelectorAll(".project-card");

function revealProjects() {
  projectCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200); // تأخير كل بطاقة 200ms بعد السابقة
    }
  });
}

window.addEventListener("scroll", revealProjects);
window.addEventListener("load", revealProjects);

// end projects
// start our team
// Staggered Animation عند Scroll
const teamCards = document.querySelectorAll(".team-card");

function revealTeam() {
  teamCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200); // كل بطاقة تظهر بعد 200ms من السابقة
    }
  });
}

window.addEventListener("scroll", revealTeam);
window.addEventListener("load", revealTeam);

// end our team
// start contact
// انيميشن عند Scroll للقسم
const contactForm = document.querySelector(".contact-form");
const contactInfo = document.querySelector(".contact-info");

function revealContact() {
  const rect = contactForm.getBoundingClientRect();
  if(rect.top < window.innerHeight - 100) {
    contactForm.classList.add("show");
    contactInfo.classList.add("show");
    window.removeEventListener("scroll", revealContact);
  }
}

window.addEventListener("scroll", revealContact);
window.addEventListener("load", revealContact);

// end contact
// scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

// إظهار الزر بعد أول 100vh
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.pointerEvents = "auto";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.pointerEvents = "none";
  }
});

// عند الضغط على الزر
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// scroll to top button