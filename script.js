const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    
    boxes.forEach(box => {
        // A DOMReact describes the size and position of a rectangle
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}