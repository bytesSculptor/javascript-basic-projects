const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color')
const btn = document.getElementById("btn");

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

btn.addEventListener('click', function () {
    // console.log(getRandomNumber());
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    // console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor
})


// setInterval(() => {
//     colorChanger()
// }, 1000);

// let colorChanger = function () {
//     // console.log(getRandomNumber());
//     let hexColor = '#'
//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomNumber()]
//     }
//     // console.log(hexColor);
//     document.body.style.backgroundColor = hexColor;
//     color.textContent = hexColor
// }