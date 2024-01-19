

// const overlay = document.getElementById('open-modal-button');
// const modal = document.getElementById('open-modal-button');

// document.getElementById('open-modal-button').addEventListener('click', function() {
//     // Code to open the modal
//     showModal();
// });

// function showModal() {
//     modal.classList.add(className);
// }

// document.getElementById('open-modal-button').addEventListener('click', function() {
//     document.getElementById('overlay').classList.add('overlay-visible');
//     document.getElementById('modal').classList.add('modal-visible');
// });

// document.getElementById('closeModalButton').addEventListener('click', function() {
//     document.getElementById('overlay').classList.remove('overlay-visible');
//     document.getElementById('modal').classList.remove('modal-visible');
// });

// Function to open the modal with spring animation
// function openModal() {
// const modal = document.getElementById('test-animation');

// Ensure the modal is visible before starting the animation
// modal.style.visibility = 'visible';

import { animate, spring } from 'motion';

const box = document.getElementById('box');
// box.style.opacity = '0';
// box.style.transform = 'translateY(200px)';

// document.addEventListener('DOMContentLoaded', () => {
//     // Delay the animation slightly to ensure the DOM is fully rendered
//     setTimeout(() => {
//         animate(
//             "#box",
//             { translateY: 0, opacity: 1 }, // Animate to the center and visible
//             { 
//                 easing: spring(),
//                 // Uncomment if you need specific duration or delay
//                 // duration: 0.5,
//                 // delay: 3
//             }
//         );
//     }, 100); // 100ms delay
// });

const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open-modal-button');
const closeModalButton = document.getElementById('close-modal-button');

openModalButton.addEventListener('click', () => {
    overlay.style.visibility = "visible";
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

// closeModalButton.addEventListener('click', () => {
    
    
//         animation.finished.then(() => {
//             overlay.style.visibility = "hidden";
//         });

        

// });



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
    });
}

// Attach the event listener to your button
closeModalButton.addEventListener('click', closeAnimation);
