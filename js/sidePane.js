const burgerButton = document.getElementById("burgerBtn")
const navPane = document.getElementById("side-pane")
const closeBtn = document.getElementById("close-btn")

burgerButton.addEventListener('click', function () {
    navPane.classList.toggle('active')
})

closeBtn.addEventListener('click', function () {
    navPane.classList.remove('active')
})