

const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function () {

    alert("Welcome to Redex Library!");

});




const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function () {

    alert("Your free book is ready to download!");

});




const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", function () {

    alert("Opening the free book...");

});




const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", function () {

    const name = prompt("Enter your name:");

    if (name !== null && name.trim() !== "") {

        alert(
            "Welcome " + name + 
            "! Your Redex Library account will be created soon."
        );

    } else {

        alert("Please enter your name.");

    }

});




const bookCards = document.getElementById("bookCards");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");


nextBtn.addEventListener("click", function () {

    bookCards.scrollBy({
        left: 200,
        behavior: "smooth"
    });

});


prevBtn.addEventListener("click", function () {

    bookCards.scrollBy({
        left: -200,
        behavior: "smooth"
    });

});




const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.parentElement;

        const bookName = card.querySelector("h3").innerText;

        alert(
            "You selected: " + bookName
        );

    });

});




const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log(
            "Opening " + link.innerText
        );

    });

});



window.addEventListener("load", function() {

    console.log("Redex Library website loaded successfully!");

});