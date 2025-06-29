// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", function () {
    const isOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isOpen ? "none" : "flex";

    // Animate hamburger menu
    const spans = mobileMenuBtn.querySelectorAll("span");
    if (isOpen) {
      spans[0].style.transform = "rotate(0deg)";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "rotate(0deg)";
    } else {
      spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
    }
  });

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.style.display = "none";
      const spans = mobileMenuBtn.querySelectorAll("span");
      spans[0].style.transform = "rotate(0deg)";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "rotate(0deg)";
    });
  });
}

// FAQ Toggle Function
function toggleFaq(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQ items
  const allFaqItems = document.querySelectorAll(".faq-item");
  allFaqItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active");
  }
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "/" && href === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// Smooth scrolling for anchor links
function smoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Form submission handler (basic validation)
function handleFormSubmission() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const requiredFields = contactForm.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "#ef4444";
        } else {
          field.style.borderColor = "#d1d5db";
        }
      });

      if (isValid) {
        // Simulate form submission
        alert(
          "Thank you for your message! We'll get back to you within 24 hours.",
        );
        contactForm.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".feature-card, .pricing-card, .service-item, .contact-card",
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

// Add loading states to buttons
function addButtonLoadingStates() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (
        this.getAttribute("href") &&
        !this.getAttribute("href").startsWith("#")
      ) {
        this.style.opacity = "0.7";
        this.style.pointerEvents = "none";

        setTimeout(() => {
          this.style.opacity = "1";
          this.style.pointerEvents = "auto";
        }, 1000);
      }
    });
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  setActiveNavLink();
  smoothScroll();
  handleFormSubmission();
  initScrollAnimations();
  addButtonLoadingStates();

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      mobileMenu &&
      mobileMenu.style.display === "flex" &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      mobileMenu.style.display = "none";
      const spans = mobileMenuBtn.querySelectorAll("span");
      spans[0].style.transform = "rotate(0deg)";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "rotate(0deg)";
    }
  });
});

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && mobileMenu) {
    mobileMenu.style.display = "none";
    const spans = mobileMenuBtn.querySelectorAll("span");
    spans.forEach((span) => {
      span.style.transform = "none";
      span.style.opacity = "1";
    });
  }
});

// Utility function for copying text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

// Add smooth hover effects for cards
function addCardHoverEffects() {
  const cards = document.querySelectorAll(
    ".feature-card, .pricing-card, .contact-card",
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
}

// Initialize card hover effects
document.addEventListener("DOMContentLoaded", addCardHoverEffects);
