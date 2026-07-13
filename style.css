// ==========================
// GET ELEMENTS
// ==========================

const openingPage = document.getElementById("openingPage");
const lovePage = document.getElementById("lovePage");
const successPage = document.getElementById("successPage");

const envelope = document.getElementById("envelope");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const datePicker = document.getElementById("datePicker");
const timePicker = document.getElementById("timePicker");

const result = document.querySelector(".date-result");

// ==========================
// INITIAL STATE
// ==========================

openingPage.classList.remove("hidden");
lovePage.classList.add("hidden");
successPage.classList.add("hidden");

// ==========================
// OPEN ENVELOPE
// ==========================

envelope.addEventListener("click", () => {

    envelope.innerHTML = "💖";

    setTimeout(() => {

        openingPage.classList.add("hidden");
        lovePage.classList.remove("hidden");

    }, 700);

});

// ==========================
// NO BUTTON ESCAPES
// ==========================

const noTexts = [
    "NO 😢",
    "Are you sure? 🥺",
    "Really? 😭",
    "Think Again ❤️",
    "Impossible 😂",
    "Catch Me 😜"
];

let textIndex = 0;

noBtn.addEventListener("mouseenter", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    textIndex++;

    if (textIndex >= noTexts.length) {
        textIndex = 0;
    }

    noBtn.textContent = noTexts[textIndex];

});

// ==========================
// YES BUTTON
// ==========================

function acceptDate() {

    if (datePicker.value === "" || timePicker.value === "") {

        alert("❤️ Please choose our date and time first.");

        return;

    }

    lovePage.classList.add("hidden");
    successPage.classList.remove("hidden");

    result.innerHTML =
        `
        <h3>Our Date is Set! 💕</h3>

        <br>

        📅 <b>${datePicker.value}</b>

        <br><br>

        🕒 <b>${timePicker.value}</b>

        <br><br>

        I can't wait to see you! ❤️
        `;
}

// Auto accept when mouse touches YES
yesBtn.addEventListener("mouseenter", acceptDate);

// Also works when clicked (for mobile)
yesBtn.addEventListener("click", acceptDate);
