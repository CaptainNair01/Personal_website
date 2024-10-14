// script.js

// Removed the alert message on page load

// Function to handle contact form submission
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Simple form validation (can be expanded)
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.innerText = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

    // For demonstration, we'll just display a success message
    formMessage.innerText = "Thank you for your message, " + name + "! I'll get back to you soon.";
    formMessage.style.color = "green";

    // Reset the form
    contactForm.reset();
  });
});
