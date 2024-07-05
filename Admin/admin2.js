document.getElementById("maintenanceDropdown").addEventListener("click", function() {
    document.getElementById("maitenenceSubmenu").classList.toggle("hidden");
    document.getElementById("maintenanceArrow").classList.toggle("rotate-180");
});

// selects all list elements
const menuList = document.querySelectorAll('.menuItem');
menuList.forEach(menuItem => {
    // add event listener on each list element
    menuItem.addEventListener('click', () => {

        // removes all current active class
        menuList.forEach(listItem => {
            listItem.classList.remove('active');
        })
        
        // add active class on selected list element
        menuItem.classList.add('active');
    })
});
