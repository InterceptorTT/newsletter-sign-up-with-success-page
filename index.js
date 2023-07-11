const container = document.querySelector("#form-container");
const successForm = document.querySelector("#success-form");
const paragraph = successForm.querySelector("p");
const form = document.querySelector(".form");
const inputText = form.querySelector("input");
const btn = form.querySelector("button");
const invalidText = form.querySelector("h4");
const dismissButton = successForm.querySelector("button");
const side = document.querySelector("#side");
const desktopImg = document.querySelector("#desktop-img");
const mobileImg = document.querySelector("#mobile-img");



btn.addEventListener("click", () => {

    function validateEmail(email) {
        // Utilizza una regular expression per verificare il formato dell'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
}

const email = inputText.value;

    if (validateEmail(email)) {
        container.style.display = "none";
        successForm.style.display = "block";
        paragraph.innerText = `A confirmation email has been sent to ${inputText.value}.Please open it and click the button inside to confirm your subscription.`
    }
    else {
        invalidText.style.display = "block";
        inputText.style.background = "rgba(255, 0, 0, 0.3)";
        inputText.style.border = "solid red 1px";
    }
})

dismissButton.addEventListener("click", () => {
    container.style.display = "block";
    successForm.style.display = "none";
})


/* SIDE IMG */
function checkWindowWidth(){

    if(window.innerWidth >= 1024){
        desktopImg.style.display = "block";
        mobileImg.style.display = "none";
        
    }
    if(window.innerWidth < 1024){
        desktopImg.style.display = "none";
        mobileImg.style.display = "block";
    }
}
checkWindowWidth(); 

    window.addEventListener("resize", checkWindowWidth);