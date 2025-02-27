// Hero Section Carousal Effect Functionality
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".carousel-dots");
const content = document.querySelector(".carousel-content");
const heading = document.querySelector("h2");
const paragraphs = document.querySelectorAll(".animated-text");
const button = document.querySelector(".carousel-btn");
let currentSlide = 0;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

// Function to update the background image (fade in/out effect)
function updateBackground(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Function to animate text and button (scroll effects)
function animateText() {
  content.style.opacity = "0";
  heading.style.animation = "none";
  paragraphs.forEach((paragraph) => {
    paragraph.style.animation = "none";
  });
  button.style.animation = "none";

  setTimeout(() => {
    content.style.opacity = "1";
    heading.style.animation = "slide-down-text 1s ease forwards";
    paragraphs[0].style.animation = "slide-down-text 1.2s ease forwards";
    paragraphs[1].style.animation = "slide-down-text-price 1.4s ease forwards";
    button.style.animation = "slide-up-btn 1.6s ease forwards";
  }, 500);
}

// Show the active slide and trigger animations
function showSlide(index) {
  updateBackground(index);
  animateText();

  dotsContainer.children[currentSlide].classList.remove("active");
  currentSlide = index;
  dotsContainer.children[currentSlide].classList.add("active");
}

// Automatic slide transition
function changeSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

setInterval(changeSlide, 5000);

// Initialize the first slide
showSlide(0);

//
//
//
//
//  Products Card Functionality
const cards = document.querySelectorAll(".card-image");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.backgroundPosition = `${(x / rect.width) * 100}% ${
      (y / rect.height) * 100
    }%`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundPosition = "center";
  });
});

//
//
//
//
//  Products Carousel Functionality
const carousel = document.querySelector(".bestseller-carousel-items");
const dots = document.querySelectorAll(".bestseller-dot");
const specialCard = document.querySelector(".bestseller-card-special");
const firstCard = document.querySelector(".bestseller-card:first-child");

let currentIndex = 0;

function updateCarousel() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });

  // Handle transition for scrolling down to 6th card
  if (currentIndex === 1) {
    firstCard.classList.add("scroll-down");
    firstCard.classList.remove("reset");

    specialCard.classList.add("scroll-up");
    specialCard.classList.remove("reset");
  } else {
    // Handle transition for returning to 1st card
    firstCard.classList.add("reset");
    firstCard.classList.remove("scroll-down");

    specialCard.classList.add("reset");
    specialCard.classList.remove("scroll-up");
  }
}

// Add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});
