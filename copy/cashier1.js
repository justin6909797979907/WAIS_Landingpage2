document.getElementById("membersDropdown").addEventListener("click", function() {
    document.getElementById("membersSubmenu").classList.toggle("hidden");
    document.getElementById("membersArrow").classList.toggle("rotate-180");
});

document.getElementById("transactionDropdown").addEventListener("click", function() {
    document.getElementById("transactionSubmenu").classList.toggle("hidden");
    document.getElementById("transactionArrow").classList.toggle("rotate-180");
});
