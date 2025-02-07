ddocument.addEventListener("DOMContentLoaded", function () {
    /* Contact Form Validation */
    const form = document.getElementById("contactForm");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Email Validation
        if (!email.value.includes("@") || !email.value.includes(".")) {
            document.getElementById("emailError").textContent = "Please enter a valid email.";
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Phone Validation
        if (!phone.value.match(/^\d{10}$/)) {
            document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
            valid = false;
        } else {
            document.getElementById("phoneError").textContent = "";
        }

        // Message Validation
        if (message.value.trim() === "") {
            document.getElementById("messageError").textContent = "Message cannot be empty.";
            valid = false;
        } else {
            document.getElementById("messageError").textContent = "";
        }

        // Prevent Form Submission if Validation Fails
        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Prevent actual form submission for this demo
            confirmationMessage.textContent = "Thank you! Your message has been received. We will contact you shortly.";
            confirmationMessage.style.color = "green";
            
            // Clear form fields
            form.reset();
        }
    });

    /* Carousel Functionality */
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".carousel-indicators span");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
        indicators.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
    indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
    setInterval(nextSlide, 5000);  // Auto slide every 5 seconds
});
