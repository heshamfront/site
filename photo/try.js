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