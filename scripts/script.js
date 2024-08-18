
//Home page cards animation
const cards = document.querySelectorAll(".card");
cards.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    cards.forEach((card) => card.classList.remove("active"));

    const target = e.target.closest(".card");
    target.classList.add("active");
  });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickHeader()};

// Get the header
const header = document.querySelector("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickHeader() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Page transition animation
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  const mainElement = document.querySelector("main");
  console.log(mainElement)

  // Ensure the main element fades in when the new page loads
  if (mainElement) {
    mainElement.classList.toggle("fade-in", true);
  }

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Add fade-out class to the main element
      if (mainElement) {
        mainElement.classList.add("fade-out");
        mainElement.classList.remove("fade-in");

        // Wait for the fade-out animation to complete before navigating
        setTimeout(() => {
          window.location.href = this.href;
        }, 250); // Adjust timing to match fade-out duration
      }
    });
  });
});

//Card hover effect
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (event) => {
      const { offsetWidth: width, offsetHeight: height } = card;
      const { clientX: mouseX, clientY: mouseY } = event;
      const { left, top } = card.getBoundingClientRect();

      const x = ((mouseX - left) / width) * 3 - 1;
      const y = ((mouseY - top) / height) * 3 - 1;

      card.style.transform = `rotateX(${y * 10}deg) rotateY(${x * -10}deg)`;
      card.classList.add('tilt-tilted');
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      card.classList.remove('tilt-tilted');
    });
  });
});

//Contact form validation
function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("subjectError").innerText = "";
  document.getElementById("messageError").innerText = "";

  // Regular Expressions
  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectRegex = /^.{3,50}$/;
  const messageRegex = /^.{10,500}$/;

  // Name Validation
  const name = document.getElementById("name").value;
  if (!nameRegex.test(name)) {
    document.getElementById("nameError").innerText =
      "Name must be at least 3 characters and only contain letters and spaces.";
    isValid = false;
  }

  // Email Validation
  const email = document.getElementById("email").value;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Subject Validation
  const subject = document.getElementById("subject").value;
  if (!subjectRegex.test(subject)) {
    document.getElementById("subjectError").innerText =
      "Subject must be between 3 and 50 characters.";
    isValid = false;
  }

  // Message Validation
  const message = document.getElementById("message").value;
  if (!messageRegex.test(message)) {
    document.getElementById("messageError").innerText =
      "Message must be between 10 and 500 characters.";
    isValid = false;
  }

  return isValid;
}