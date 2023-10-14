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



// ****************** EVENT LISTENERS **********************

// submit form
form.addEventListener('submit', addItem)

// clear items
clearBtn.addEventListener('click', clearAllItem)

// display items onload
window.addEventListener('DOMContentLoaded', setupItems)


// ****************** FUNCTIONS **********************

// add item
function addItem(e) {
    e.preventDefault()
    const inputValue = groceryInput.value;
    const id = new Date().getTime().toString();

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
        // console.log("ADDING NEW ITEM");
        createListItem(id, inputValue)

        // display alert
        displayAlert('Item added to the list', 'success');

        // show grocery container
        groceryContainer.classList.add('show-container')

        // add to local storage
        addToLocalStorage(id, inputValue);

        // clear input field
        clearInputField();
    } else if (inputValue && editFlag) {
        // console.log("editing");
        editElement.innerHTML = inputValue;
        displayAlert('value changed', 'success')
        // edit local storage
        editLocalStorage(editId, inputValue)
        clearInputField()
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

// set input to default
function clearInputField() {
    // console.log('input set to default');
    groceryInput.value = '';
    editFlag = false;
    editId = "";
    submitBtn.textContent = 'submit'
}

// clear item list
function clearAllItem() {
    const items = document.querySelectorAll('.grocery-item')

    if (items.length > 0) {
        items.forEach(function (item) {
            groceryList.removeChild(item)
        })
    }
    groceryContainer.classList.remove('show-container')
    displayAlert('empty list', 'danger')
    clearInputField();
    localStorage.removeItem('list')
}

// edit item function
function editItem(e) {
    // console.log('edit item');
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    groceryInput.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit'
}

// delete item function
function deleteItem(e) {
    // console.log('item delete successfully');
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id
    groceryList.removeChild(element);
    if (groceryList.children.length === 0) {
        groceryContainer.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger')
    clearInputField()
    // remove from local storage
    removeFromLocalStorage(id)
}

// ****************** LOCAL STORAGE **********************

// add to local storage
function addToLocalStorage(id, value) {
    // const grocery = { id: id, value: value }
    const grocery = { id, value }
    // console.log(grocery);
    let items = getLocalStorage();
    console.log(items);
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items))
}

// edit local storage
function editLocalStorage(id, value) {
    let items = getLocalStorage();

    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item
    });
    localStorage.setItem('list', JSON.stringify(items))
}

// remove From Local Storage
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    })

    localStorage.setItem('list', JSON.stringify(items))
}

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

/*
    // local storage API
    // setItem
    // getItem
    // removeItem
    // save as strings
    // localStorage.setItem("orange", JSON.stringify(['item1', 'item2']))
    // console.log(localStorage);
    // const oranges = JSON.parse(localStorage.getItem('orange'))
    // console.log(oranges);
*/


// ****************** SETUP ITEMS **********************
function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value)
        })
        groceryContainer.classList.add('show-container')
    }
}

function createListItem(id, inputValue) {
    const element = document.createElement('article');

    // add class to element 
    element.classList.add('grocery-item');

    // add attribute to the element
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `<p class="title">${inputValue}</p>
    <div class="btn-container">
       <button class="edit-btn" type="button">
           <i class="fas fa-edit"></i>
       </button>
       <button class="delete-btn">
           <i class="fas fa-trash"></i>
       </button>
    </div>`;

    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')

    deleteBtn.addEventListener("click", deleteItem)
    editBtn.addEventListener("click", editItem)

    // append child
    groceryList.appendChild(element);
}