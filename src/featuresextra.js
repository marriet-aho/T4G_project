// Apply Button Alert
document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-btn');

    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your interest! Your application will be processed.');
        });
    });
});
