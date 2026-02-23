document.addEventListener('DOMContentLoaded', () => {
    const bricks = document.querySelectorAll('.brick');

    // Animation d'entrée : les briques apparaissent avec un léger délai
    bricks.forEach((brick, index) => {
        brick.style.opacity = '0';
        brick.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            brick.style.opacity = '1';
            brick.style.transform = 'scale(1)';
            brick.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }, 100 * index);
    });

    // Optionnel : Logique de clic
    bricks.forEach(brick => {
        brick.addEventListener('click', (e) => {
            console.log("Navigation vers : " + brick.getAttribute('href'));
        });
    });
});