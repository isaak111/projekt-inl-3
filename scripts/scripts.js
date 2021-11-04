import { isMobile } from './mobile.js';

if (!isMobile()) {
    (function () {
        let navbar = document.getElementById("nav");
        let bodyList = ["home", "about", "services"];

        function displaySection(e) {
            console.info("e.target.innerText = " + e.target.innerText);
            if (e.target.innerText != "Contact" && e.target.innerText != null && e.target.innerText != "Home Services About Contact") {
                for (let i = 0; i < bodyList.length; i++) {
                    let element = document.getElementById(bodyList[i]);
                    element.classList.add("hidden");
                    if (!element.classList.contains("hero-section")) {
                        element.classList.remove("flex");
                    }
                }
                let displaySection = document.getElementById(e.target.innerText.toLowerCase());

                if (displaySection != null) {
                    if (!displaySection.classList.contains("hero-section")) {
                        displaySection.classList.add("flex");
                    }
                    displaySection.classList.remove("hidden");
                }
            }
        }
        navbar.addEventListener("click", displaySection);
    }())
};
