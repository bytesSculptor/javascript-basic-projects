const colors = [
    'rgba(255, 0, 0, 0.5)',
    'rgba(0, 255, 0, 0.5)',
    'rgba(0, 0, 255, 0.5)',
    'rgba(255, 255, 0, 0.5)',
    'rgba(255, 0, 255, 0.5)',
    'rgba(0, 255, 255, 0.5)',
    'rgba(128, 128, 128, 0.5)',
    'rgba(255, 127, 0, 0.7)',
    'rgba(0, 255, 127, 0.7)',
    'rgba(127, 0, 255, 0.7)',
    'rgba(0, 127, 255, 0.7)',
    'rgba(255, 0, 127, 0.7)',
    'rgba(127, 255, 0, 0.7)',
    'rgba(255, 255, 255, 0.3)',
    'rgba(0, 0, 0, 0.8)'
]


const btn = document.getElementById("btn");
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber]
    document.body.style.backgroundColor = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}