const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
    //console.log(e.target.src)
    let changeimage = e.target.src;

    modal.showModal();
    modalImage.setAttribute("src", changeimage.replace("-sm", "-full"));
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
    modalImage.removeAttribute("src");
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
