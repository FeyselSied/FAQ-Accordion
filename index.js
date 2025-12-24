


const accordionButtons = document.querySelectorAll('.question');
console.log(accordionButtons);

accordionButtons.forEach((button) => {
    button.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hide');
    } )
});