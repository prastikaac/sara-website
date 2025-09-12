// ==================== Popup Logic ====================

// Show popup after 3 seconds
setTimeout(() => {
  document.getElementById("popupOverlay").classList.add("active");
}, 1000); // Changed to 3 sec

// Close popup
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popupOverlay").classList.remove("active");
});

// Book Now button action
document.getElementById("bookbtn").addEventListener("click", function () {
  window.location.href =
    "contact-us.html#contactnow?address-rental+Exclusive-Business-Address-Rental-Deal-at-50%-off-for-the-first-three-months";
});

// ==================== Countdown & Notify Logic ====================

// Set the release date (7 days from now)
const releaseDate = new Date();
releaseDate.setDate(releaseDate.getDate() + 7);
releaseDate.setHours(11, 0, 0, 0); // 11:00 AM

// Elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const notifyBtn = document.getElementById("notifyBtn");
const notifyForm = document.getElementById("notifyForm");
const submitBtn = document.getElementById("submitBtn");
const emailInput = document.getElementById("emailInput");
const successMessage = document.getElementById("successMessage");
const productImage = document.getElementById("productImage");

// Update countdown timer
function updateCountdown() {
  const now = new Date();
  const diff = releaseDate - now;

  if (diff <= 0) {
    // Release time has passed
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = days.toString().padStart(2, "0");
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minutesEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Event listeners
notifyBtn.addEventListener("click", () => {
  notifyForm.classList.add("visible");
  emailInput.focus();
});

submitBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (!email || !email.includes("@") || !email.includes(".")) {
    emailInput.style.animation = "shake 0.5s";
    setTimeout(() => {
      emailInput.style.animation = "";
    }, 500);
    return;
  }

  notifyForm.classList.remove("visible");
  successMessage.classList.add("visible");

  setTimeout(() => {
    successMessage.classList.remove("visible");
  }, 3000);
});

document.addEventListener("mouseleave", () => {
  productImage.style.opacity = "0";
});

// Add glitch effect to logo on click
document.querySelector(".logo").addEventListener("click", function () {
  this.style.animation = "none";
  this.offsetHeight; // Trigger reflow
  this.style.animation = "glitch 0.5s";

  // Flash accent color circles
  document.querySelectorAll(".accent-circle").forEach((circle) => {
    circle.style.opacity = "0.3";
    setTimeout(() => {
      circle.style.opacity = "0.1";
    }, 300);
  });
});
