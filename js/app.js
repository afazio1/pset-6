window.onload = function() {


	document.getElementById("button").onclick = submitForms;
}
let toDoList = [];
let i = -1;

const submitForms = function(e) {
	e.preventDefault();
	
	i += 1;

	const list = document.getElementById("ul");

	let todo = {
		title: document.getElementById("exampleFormControlInput1").value,
		priority: document.getElementById("defaultCheck1").checked
	}

	toDoList.push(todo);
	
	console.log(toDoList);
	
	const item = document.createElement("li");

	span = document.createElement("SPAN");
	span.className = "title";
	span.innerHTML = toDoList[i].title;

	if (toDoList[i].priority === true) {
		span1 = document.createElement("SPAN");
		span1.className = "high-priority";
		span1.innerHTML = "!";
	}
	else if (toDoList[i].priority === false) {
		span1 = document.createElement("SPAN");
		span1.className = "low-priority";
		span1.innerHTML = "!";
	}

	item.appendChild(span);
	item.appendChild(span1);
	list.append(item);
	
}