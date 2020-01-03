let array = [];


let button = document.getElementById("button");
let textbox = document.querySelector("input");
let body = document.querySelector("body");
let pos = 0;
let item;
let list;
let br = document.querySelector("br");
console.log("first");


function displayList(pos){
for (let i = 0; i < array.length; i++){
	list = document.querySelector("ul");
	item = document.createElement("li");
	trash = document.createElement("SPAN");
	priority = document.createElement("SPAN");
	trash.setAttribute("id", "trash");
	priority.setAttribute("id", "priority");
	item.setAttribute("id", pos);
	console.log(item.id);
	console.log(array);
	item.innerHTML = array[pos].title
	trash.innerHTML = "X";
	priority.innerHTML = "!";
	pos++;
	}
	
	item.prepend(priority);
	item.prepend(trash);
	list.append(item);

	console.log(pos);

return pos;
}




body.addEventListener('click', function(event){
	elementClicked = event.target;

	if (elementClicked.id == "button") {
		array.push({
		title: textbox.value,
		priority: false,
		remove: false,
	});
	console.log("sencond");
	displayList(pos);
	}

	else if (elementClicked.id == "trash") {
		console.log("trash");
		pos = item.id;
		deleteItem(pos);
		//displayList(pos);
		
		
	}
});
//items don't delete properly
function deleteItem(pos) {

array.splice(pos - 1, pos + 1);

item = document.getElementById(pos);

item.remove()
pos = 0;




}

	

























/*

$("ul").on("click", "li", function(event){
	$(this).toggleClass("completed");

});

//need to work on the priority part
$("ul").on("click", "span", function(event){
	if ($(this).hasClass("priority")) {
		$(this).toggleClass("high-priority");
		if ($(this).hasClass("high-priority")) {
			$(this).parent().prependTo("ul");
		}
		else {
			$(this).parent().appendTo("ul");
		}

		event.stopPropagation();
		console.log("high");
	}
	else {

		$(this).parent().remove();
		event.stopPropagation();
	}

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		if (todoText != "") {
			//create a new li and add to ul
			$("ul").append("<li><span class='priority'><i class='fa fa-exclamation-circle'></i></span><span><i class='fa fa-trash'></i></span> " + todoText + " </li>");
		}
	}
});
*/
