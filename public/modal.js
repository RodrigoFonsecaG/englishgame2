function scheduleModal() {
  const scheduleButton = document.querySelector('.add-word');
  const modalContainer = document.querySelector('.modal-container');
  const modal = document.querySelector('.modal');

  scheduleButton.addEventListener('click', (event) => {
    event.preventDefault();
    modalContainer.classList.add('ativo');
  });

  modalContainer.addEventListener('click', (event) => {
    (modal.contains(event.target)) ? '' : modalContainer.classList.remove('ativo');
  })
}

scheduleModal();
