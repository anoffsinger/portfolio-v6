import { animate, spring } from 'motion';

const box = document.getElementById('box');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open-modal-button');
const closeModalButton = document.getElementById('close-modal-button');

openModalButton.addEventListener('click', () => {
    overlay.style.visibility = "visible";
    document.body.classList.add("no-scroll");
    animate(
        overlay,
        {
            opacity: 1,
            backdropFilter: 'blur(10px)'
        },
        {
            easing: spring({
                stiffness: 50,
                damping: 8,
                mass: 0.8
            })
        });
    animate(
        modal,
        {
            translateY: -100,
            opacity: 1
        },
        {
            easing: spring({
                stiffness: 50,
                damping: 8,
                mass: 0.8
            })
        });
});

// Function to handle the animation
function closeAnimation() {
    const animation = 
    animate(
        overlay,
        {
            opacity: 0,
            backdropFilter: 'blur(0px)'
        },
        {
            easing: spring({
                stiffness: 50,
                damping: 8,
                mass: 0.8
            })
        });
    animate(
        modal,
        {
            translateY: 0,
            opacity: 0
        },
        {
            easing: spring({
                stiffness: 50,
                damping: 8,
                mass: 0.8
            })
        });

    // Wait for the animation to complete
    animation.finished.then(() => {
        overlay.style.visibility = "hidden";
        document.body.classList.remove("no-scroll");
    });
}

// Attach the event listener to your button
closeModalButton.addEventListener('click', closeAnimation);

function handleEscapeKey(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        closeAnimation();
    }
}

// Event listener for the Escape key
document.addEventListener('keydown', handleEscapeKey);
