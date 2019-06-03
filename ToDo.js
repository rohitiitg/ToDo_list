var input = document.getElementById("new_item");
var list = document.getElementById("item1");

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    //event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});



var createNewTaskElement = function(taskString, doedit) {

  var listItem = document.createElement("li");
  var label = document.createElement("label");
  var checkBox = document.createElement("input"); //checkbx
  var deleteButton = document.createElement("button"); //delete button
  var editButton = document.createElement("button"); //edit button
  //label

  label.innerText = taskString;
  checkBox.type = "checkbox";
  checkBox.className = "checkbxclass";
  checkBox.setAttribute("onclick", "checkit(this,this.checked)");

  listItem.className = "liclass";
  deleteButton.innerText = "X";
  deleteButton.className = "delete";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  editButton.setAttribute("onclick", "editTask(this)");
  deleteButton.setAttribute("onclick", "deleteTask(this);");



  //and appending.
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}
//document.getElementById("item1").removeChild(list.childNodes[0]);

document.getElementById("btn").onclick = addTask;

function addTask() {
  if (input.value == "") alert("write something");
  else {
    var new_list = createNewTaskElement(input.value, false);
    list.appendChild(new_list);
    input.value = "";
  }
  //var temp = document.querySelectorAll(".checkbxclass");
  //console.log(temp);
}

function editTask(item) {

  var listItem = item.parentNode;
  console.log(listItem.childNodes[1]);
  var editText = listItem.childNodes[1].innerText;
  var editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "editclass";
  editInput.value = editText;
  listItem.removeChild(listItem.childNodes[1]);
  listItem.insertBefore(editInput, listItem.childNodes[1]);
  var saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.className = "save";
  listItem.removeChild(listItem.childNodes[2]);
  listItem.insertBefore(saveButton, listItem.childNodes[2]);
  saveButton.setAttribute("onclick", "saveTask(this)");

  editInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      //event.preventDefault();
      // Trigger the button element with a click
      saveButton.click();
    }
  });

}

function saveTask(item) {
  var listItem = item.parentNode;
  var saveText = listItem.childNodes[1].value;
  var saveInput = document.createElement("label");
  saveInput.innerText = saveText;
  listItem.removeChild(listItem.childNodes[1]);
  listItem.insertBefore(saveInput, listItem.childNodes[1]);

  var editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "edit";
  editButton.setAttribute("onclick", "editTask(this)");
  listItem.removeChild(listItem.childNodes[2]);
  listItem.insertBefore(editButton, listItem.childNodes[2]);
  console.log(listItem.childNodes[1].value);

}




function deleteTask(item) {
  console.log("Delete Task...");
  var result = confirm("Are you sure to delete this item?");
  if (result) {
    var listItem = item.parentNode;
    var ul = listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
  }
}

function checkit(item, isChecked) {
  if (isChecked) {
    item.parentNode.style.backgroundColor = "green";
  } else {
    item.parentNode.style.backgroundColor = "#66BFBF";
  }
}

function abcd(it) {
  if (it) alert('hhrhrie');
  else alert("another");
}

//deleteButton.onclick=deleteTask;
