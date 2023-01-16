
let toDoItems = []
const button = document.getElementById("button-el")
const clearBtn = document.getElementById("clear-btn")
const orderedList = document.getElementById("ol-el")
const input = document.getElementById("input-el")


button.addEventListener("click", function() {
    toDoItems.push(input.value)
    input.value = ""
    addItem()
})

function addItem(){
    let listItems = ""
    for( let i = 0; i < toDoItems.length; i++) {
        listItems += `
            <li class="animate__animated animate__bounceIn"> 
            ${toDoItems[i]}
            </li>
        `
        orderedList.innerHTML = listItems

    }
}

clearBtn.addEventListener("click", function(){
    orderedList.innerHTML = ""

})