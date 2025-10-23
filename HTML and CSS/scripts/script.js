// Select elements
const toggleBtn = document.getElementById('Btn');
const aboutSection = document.getElementById('about');

// Add click event
toggleBtn.addEventListener('click', () => {
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
        toggleBtn.textContent = 'Hide About Me';
    } else {
        aboutSection.style.display = 'none';
        toggleBtn.textContent = 'Show About Me';
    }
});
