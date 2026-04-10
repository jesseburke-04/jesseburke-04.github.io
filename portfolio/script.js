//This is my JavaScript file for my portfolio, the reflection is in my CSS Stylesheet
// Ceating the event for my color changing button, and making sure you can toggle it on and off.
document.querySelector(".digital-takeover-btn").addEventListener("click", function() {
    // Finds the digital-takeover class and toggles it on or off
    document.body.classList.toggle("digital-takeover");
    // Using an if statement to change the link color from pink to black
    if (document.body.classList.contains("digital-takeover")) {
        document.documentElement.style.setProperty('--link-color', '#D71AE6');
    } else {
        document.documentElement.style.setProperty('--link-color', '#1a1c20');
    }
});

// Creating the even for the name button, in my contact form.
document.querySelector(".name-btn").addEventListener("click", function(event) {
    // Make sure the page doesn't refresh
    event.preventDefault();
    // use a variable to store users input
    let name = document.querySelector(".name").value;
    // Change the text and call the users input
    document.querySelector(".name-output").textContent = "Welcome, " + name + "!";
});

// Creating the even for my email button, and how the email box will disappear.
document.querySelector(".email-btn").addEventListener("click", function(event) {
    // Make sure the page doesn't refresh
    event.preventDefault();
    // Hide the email box
    document.querySelector(".email").parentElement.style.display = "none";
    // Show the email submitted message
    document.querySelector(".email-output").textContent = "Email has been submitted!";
});