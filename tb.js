// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Modal Functionality
const modal = document.getElementById('modal');
const modalTrigger = document.querySelector('.modal-trigger');
const closeModal = document.querySelector('.close');

modalTrigger.onclick = function() {
    modal.style.display = 'block';
};

closeModal.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
