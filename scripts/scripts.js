(function () {

    let navbar = document.getElementById("nav");

    let bodyList = ["home", "about", "service"];

    function displaySection(e) {
        for (let i = 0; i < bodyList.length; i++) {
            let element = document.getElementById(bodyList[i]);
            element.classList.add("hidden");
        }

        if(e.target.innerText)
        let displaySection = document.getElementById(e.target.innerText.toLowerCase());

        displaySection.classList.remove("hidden");
    }

    navbar.addEventListener("click" displaySection());
}());