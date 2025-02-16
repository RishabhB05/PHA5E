document.querySelectorAll('.images').forEach(img => {
    let timeout;
    
    img.addEventListener('mousemove', (e) => {
        clearTimeout(timeout);

        let rect = img.getBoundingClientRect();
        let x = (e.clientX - rect.left - rect.width / 2) * 0.3; 
        let y = (e.clientY - rect.top - rect.height / 2) * 0.3;

        img.style.transition = 'transform 0.1s linear'; 
        img.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    });

    img.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            img.style.transition = 'transform 0.5s ease-out'; 
            img.style.transform = 'translate(0, 0) scale(1)';
        }, 50);
    });
});

// Effect for other images and text
const images = document.querySelectorAll('.images');
const title = document.querySelector('.title');

images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        // Apply effects to other images
        images.forEach(otherImg => {
            if (otherImg !== img) { 
                otherImg.classList.add('images-hovered'); 
            }
        });

        // Bring hovered image to the front
        img.classList.add('images-active');

        // Apply effect to the title (text)
        title.classList.add('title-hovered');
    });

    img.addEventListener('mouseleave', () => {
        // Remove effects from other images
        images.forEach(otherImg => {
            if (otherImg !== img) { 
                otherImg.classList.remove('images-hovered'); 
            }
        });

        // Reset z-index when mouse leaves
        img.classList.remove('images-active');

        // Remove effect from the title (text)
        title.classList.remove('title-hovered');
    });
});
