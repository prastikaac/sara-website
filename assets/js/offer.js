// ==================== Popup Creation ====================
function createPopup() {
  // Create popup overlay
  const popupOverlay = document.createElement("div");
  popupOverlay.className = "popup-overlay";
  popupOverlay.id = "popupOverlay";

  // Offer container
  const offerContainer = document.createElement("div");
  offerContainer.className = "offer-container";

  // Close button
  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.id = "closePopup";
  closeBtn.innerHTML = "&times;";

  // Product teaser
  const productTeaser = document.createElement("div");
  productTeaser.className = "product-teaser";

  const productName = document.createElement("h1");
  productName.className = "product-name";
  productName.textContent = "Get 50% off";

  const productDescription = document.createElement("p");
  productDescription.className = "product-description";
  productDescription.textContent =
    "Exclusive Business Address Rental Deal: Get your official business address in Helsinki — first 3 months at 50% off!";

  const offerEnds = document.createElement("p");
  offerEnds.style.fontWeight = "700";
  offerEnds.style.fontSize = "20px";
  offerEnds.style.marginBottom = "13px";
  offerEnds.textContent = "Offer Ends in";

  // Countdown wrapper
  const countdownWrapper = document.createElement("div");
  countdownWrapper.className = "countdown-wrapper";

  const countdownData = [
    { id: "days", label: "Days" },
    { id: "hours", label: "Hours" },
    { id: "minutes", label: "Minutes" },
    { id: "seconds", label: "Seconds" },
  ];

  countdownData.forEach((item) => {
    const box = document.createElement("div");
    box.className = "countdown-box";

    const number = document.createElement("div");
    number.className = "countdown-number";
    number.id = item.id;
    number.textContent = "00";

    const label = document.createElement("div");
    label.className = "countdown-label";
    label.textContent = item.label;

    box.appendChild(number);
    box.appendChild(label);
    countdownWrapper.appendChild(box);
  });

  // CTA Section
  const ctaSection = document.createElement("div");
  ctaSection.className = "cta-section";

  const bookBtn = document.createElement("button");
  bookBtn.id = "bookbtn";
  bookBtn.textContent = "Book Now";

  ctaSection.appendChild(bookBtn);

  // Build structure
  productTeaser.appendChild(productName);
  productTeaser.appendChild(productDescription);
  productTeaser.appendChild(offerEnds);
  productTeaser.appendChild(countdownWrapper);
  productTeaser.appendChild(ctaSection);

  offerContainer.appendChild(closeBtn);
  offerContainer.appendChild(productTeaser);

  popupOverlay.appendChild(offerContainer);

  // Append to body
  document.body.appendChild(popupOverlay);

  // ==================== Popup Logic ====================

  // Show popup after 3 seconds
  setTimeout(() => {
    popupOverlay.classList.add("active");
  }, 5000);

  // Close popup
  closeBtn.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
  });

  // Book Now button action
  bookBtn.addEventListener("click", function () {
    window.location.href =
      "contact-us.html#contactnow?address-rental+Exclusive-Business-Address-Rental-Deal-at-50%-off-for-the-first-three-months";
  });

  // ==================== Countdown Logic ====================

  // Set the release date (7 days from now at 11:00 AM)
  const releaseDate = new Date();
  releaseDate.setDate(releaseDate.getDate() + 7);
  releaseDate.setHours(11, 0, 0, 0);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date();
    const diff = releaseDate - now;

    if (diff <= 0) {
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

  // Start countdown
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Initialize popup when DOM is ready
document.addEventListener("DOMContentLoaded", createPopup);
