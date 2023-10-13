// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form')
const alert = document.querySelector('.alert')
const groceryInput = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const groceryContainer = document.querySelector('.grocery-container')
const groceryList = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener('submit', addItem)


// ****** FUNCTIONS **********

// add item
function addItem(e) {
    e.preventDefault()
    const inputValue = groceryInput.value;
    /*
        // if (inputValue !== '' && editFlag == false) {
        //     console.log("JUST ADDING");
        // } else if (inputValue !== '' && editFlag == true) {
        //     console.log("editing");
        // } else {
        //     console.log("Empty value")
        // }
    */
    if (inputValue && !editFlag) {
        console.log("JUST ADDING");
    } else if (inputValue && editFlag) {
        console.log("editing");
    } else {
        // console.log("Empty value")
        displayAlert("Please enter value", "danger")
    }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    // remove alert
    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
