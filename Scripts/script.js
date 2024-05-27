// JavaScript for Dropdown Animation
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            dropdown.classList.add('animate');
            setTimeout(function() {
                dropdown.classList.remove('animate');
            }, 1000);
        });
    });
});
