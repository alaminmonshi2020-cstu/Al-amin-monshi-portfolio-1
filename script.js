// Typing effect
const text = [" IT Student ", " Web Developer ", " IT Support Expert ", " Freelancer "];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.getElementById("typing").innerHTML = currentText;

        if (j == text[i].length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }

        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == text.length) i = 0;
        }
    }
    setTimeout(type, 100);
}

type();

// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}