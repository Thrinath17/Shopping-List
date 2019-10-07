var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	ul.appendChild(div);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	div.setAttribute("class","item-wrapper");
	div.appendChild(deleteButton);
	input.value = "";
	deleteButton.addEventListener("click", deleteItem);
	li.addEventListener("click", toggleAction);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleAction(){
	this.classList.toggle("done");
}

function deleteItem(){
	this.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





