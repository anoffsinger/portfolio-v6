// const overlay = document.getElementById('open-modal-button');
// const modal = document.getElementById('open-modal-button');

// document.getElementById('open-modal-button').addEventListener('click', function() {
//     // Code to open the modal
//     showModal();
// });

// function showModal() {
//     modal.classList.add(className);
// }

document.getElementById('open-modal-button').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('overlay-visible');
    document.getElementById('modal').classList.add('modal-visible');
});

document.getElementById('closeModalButton').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('overlay-visible');
    document.getElementById('modal').classList.remove('modal-visible');
});