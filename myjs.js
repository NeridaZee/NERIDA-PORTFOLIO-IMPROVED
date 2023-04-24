var typed = new Typed('.auto-type', {
    strings: ["EENISM"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
})

const spinnerWrapperEl = document.querySelector('.spinner');

setTimeout(() => {
    spinnerWrapperEl.style.opacity = '0';
    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none'
    }, 200)
},1000)

