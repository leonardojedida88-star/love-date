const envelope = document.getElementById("envelope");

const openingPage = document.getElementById("openingPage");
const lovePage = document.getElementById("lovePage");
const successPage = document.getElementById("successPage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const datePicker = document.getElementById("datePicker");
const timePicker = document.getElementById("timePicker");

const result = document.querySelector(".date-result");

// Open envelope
envelope.onclick = () => {

    envelope.innerHTML = "💖";

    setTimeout(() => {

        openingPage.style.display = "none";
        lovePage.classList.remove("hidden");

    },700);

};

// NO button runs away
noBtn.addEventListener("mouseenter", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});

// YES auto-click
yesBtn.addEventListener("mouseenter", () => {

    if(datePicker.value==="" || timePicker.value===""){

        alert("Please choose our date and time first ❤️");
        return;

    }

    lovePage.style.display="none";

    successPage.classList.remove("hidden");

    result.innerHTML =
        "📅 <b>" + datePicker.value +
        "</b><br><br>🕒 <b>" + timePicker.value + "</b>";

});