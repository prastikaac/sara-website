// ==================== Popup Creation ====================
function createPopup() {
    const popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay";
    popupOverlay.id = "popupOverlay";

    const offerContainer = document.createElement("div");
    offerContainer.className = "offer-container";

    const closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.id = "closePopup";
    closeBtn.innerHTML = "&times;";

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

    const ctaSection = document.createElement("div");
    ctaSection.className = "cta-section";

    const bookBtn = document.createElement("button");
    bookBtn.id = "bookbtn";
    bookBtn.textContent = "Book Now";
    ctaSection.appendChild(bookBtn);

    productTeaser.appendChild(productName);
    productTeaser.appendChild(productDescription);
    productTeaser.appendChild(offerEnds);
    productTeaser.appendChild(countdownWrapper);
    productTeaser.appendChild(ctaSection);

    offerContainer.appendChild(closeBtn);
    offerContainer.appendChild(productTeaser);
    popupOverlay.appendChild(offerContainer);
    document.body.appendChild(popupOverlay);

    // ==================== Cookie Helpers ====================
    function setCookie(name, value, hours) {
        const d = new Date();
        d.setTime(d.getTime() + hours * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split(";").map((c) => c.trim());
        for (let c of cookies) {
            if (c.startsWith(name + "=")) {
                return c.substring(name.length + 1);
            }
        }
        return null;
    }

    // ==================== Popup Logic ====================
    const cookieName = "popupHidden";

    // only show if cookie does NOT exist
    if (!getCookie(cookieName)) {
        setTimeout(() => {
            popupOverlay.classList.add("active");
        }, 5000);
    }

    // hide & set cookie for 12h
    function hidePopupFor12h() {
        popupOverlay.classList.remove("active");
        setCookie(cookieName, "true", 12);
    }

    // Close popup and set cookie
    closeBtn.addEventListener("click", hidePopupFor12h);

    // Book Now button action – also hide popup for 12h then redirect
    bookBtn.addEventListener("click", function () {
        hidePopupFor12h();
        window.location.href =
            "contact-us.html#contactnow?address-rental+Exclusive-Business-Address-Rental-Deal-at-50%-off-for-the-first-three-months";
    });

    // ==================== Countdown Logic ====================
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
            daysEl.textContent =
                hoursEl.textContent =
                minutesEl.textContent =
                secondsEl.textContent =
                "00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, "0");
        hoursEl.textContent = hours.toString().padStart(2, "0");
        minutesEl.textContent = minutes.toString().padStart(2, "0");
        secondsEl.textContent = seconds.toString().padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize popup
document.addEventListener("DOMContentLoaded", createPopup);
