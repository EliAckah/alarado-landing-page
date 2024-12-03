window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});


// Select all theme toggle switches
const themeToggles = document.querySelectorAll('.theme-toggle');

// Check the saved theme preference (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.className = savedTheme;
    themeToggles.forEach(toggle => {
        toggle.checked = savedTheme === 'dark-mode';
    });
}

// Add event listeners for all toggle switches
themeToggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
        const isDarkMode = toggle.checked;
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');

        // Synchronize all toggles
        themeToggles.forEach(syncToggle => {
            syncToggle.checked = isDarkMode;
        });
    });
});
