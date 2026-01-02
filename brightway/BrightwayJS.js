function showLanguage(language) {
    // Get all language sections
    const sections = document.querySelectorAll('.language-section');

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(language).classList.add('active');
}