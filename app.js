
var list = document.getElementById("list")

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    var li = document.createElement('li')
    var liText = document.createTextNode(" " + todo_item.value + " ")
    li.appendChild(liText)
   
    // var libox = document.createElement('input')
    // libox.setAttribute('type' , 'checkbox')
    // li.appendChild(libox)
    
    var delBtn = document.createElement('button')
    var delText = document.createTextNode(' Delete')
    delBtn.setAttribute('class' , 'btn btn-danger')
    delBtn.setAttribute('onclick' , 'deleteItem(this)')
    delBtn.innerHTML = "<i class='far fa-trash-alt'> </i>"
    delBtn.appendChild(delText)

    // create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute('class' , 'btn btn-warning')
    editBtn.setAttribute('onclick' , 'editItem(this)')
    editBtn.innerHTML = "<i class='fas fa-edit'></i>"
    editBtn.appendChild(editText)
    
    li.appendChild(editBtn)
    
    li.appendChild(delBtn)
    list.appendChild(li)

    
     
    todo_item.value = ""



    console.log(li)
}

function deleteItem(e){
 e.parentNode.remove()
}

function editItem(e){
    // console.log(e.parentNode.nodeValue)
    
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value")
    e.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll(){
    list.innerHTML = ""
}

