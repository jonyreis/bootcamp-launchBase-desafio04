
const accordionList = document.querySelectorAll('.js-accordion dt')
function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach(item => {
    item.addEventListener('click', activeAccordion)
})