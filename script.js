document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (event) {
        let valid = true;

        if (!email.value.includes("@") || !email.value.includes(".")) {
            document.getElementById("emailError").textContent = "Please enter a valid email.";
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (!phone.value.match(/^\d{10}$/)) {
            document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
            valid = false;
        } else {
            document.getElementById("phoneError").textContent = "";
        }

        if (message.value.trim() === "") {
            document.getElementById("messageError").textContent = "Message cannot be empty.";
            valid = false;
        } else {
            document.getElementById("messageError").textContent = "";
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            if (confirmationMessage) {
                confirmationMessage.textContent = "Thank you! Your message has been received. We will contact you shortly.";
                confirmationMessage.style.color = "green";
            }
            form.reset();
        }
    });

    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".carousel-indicators span");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let currentIndex = 0;

    function showSlide(index) {
        if (slides.length === 0 || indicators.length === 0) return;
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
        indicators.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        if (slides.length === 0) return;
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        if (slides.length === 0) return;
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);
    indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
    if (slides.length > 0) {
        setInterval(nextSlide, 5000);
    }
});
