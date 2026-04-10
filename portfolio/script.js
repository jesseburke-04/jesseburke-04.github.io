
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

