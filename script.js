// Add a click event to toggle the dropdown visibility
document.getElementById("aboutUsLink").addEventListener("click", function (e) {
    e.preventDefault();
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = (dropdownContent.style.display === "block" ? "none" : "block");
});
