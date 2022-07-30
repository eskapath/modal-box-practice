const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', (e) => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
})