
document.querySelector(".digital-takeover-btn").addEventListener("click", function() {
    // finds the digital-takeover class and toggles it on or off
    document.body.classList.toggle("digital-takeover");
    // using an if statement to change the link color from pink to black
    if (document.body.classList.contains("digital-takeover")) {
        document.documentElement.style.setProperty('--link-color', 'black');
    } else {
        document.documentElement.style.setProperty('--link-color', '#D71AE6');
    }
});

document.querySelector(".name-btn").addEventListener("click", function(event) {
    // make sure the page doesn't refresh
    event.preventDefault();
    // use a variable to store users input
    let name = document.querySelector(".name").value;
    // change the text and call the users input
    document.querySelector(".name-output").textContent = "Welcome, " + name + "!";
});

document.querySelector(".email-btn").addEventListener("click", function(event) {
    // hide the email box
    document.querySelector(".email").parentElement.style.display = "none";
    // show the email submitted message
    document.querySelector(".email-output").textContent = "Email has been submitted!";
});