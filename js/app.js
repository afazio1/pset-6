window.onload = function() {


	document.getElementById("button").onclick = submitForms;
}

const submitForms = function(e) {
	//this needs work
	e.preventDefault();
	let toDoList = [];
	const list = document.getElementById("ul");
	

	const title = document.getElementById("exampleFormControlInput1").value;
	const description = document.getElementById("exampleFormControlTextarea1").value;
	const checkbox = document.getElementById("defaultCheck1").checked;

	toDoList.push(title);
	toDoList.push(description);
	toDoList.push(checkbox); 
	console.log(toDoList);
	
	const item = document.createElement("li");
	for (let i = 0; i < 3; i++) {
		const span = document.createElement("SPAN");
		
		if (i === 0) {
			span.className = "title";
			span.innerHTML = toDoList[i];
		}
		else if (i === 1) {
			span.className = "description";
			span.innerHTML = toDoList[i];

		}
		else if (toDoList[2] === true) {
			span.className = "high-priority";
			span.innerHTML = "!";
		}
		else if (toDoList[2] === false) {
			span.className = "low-priority";
			span.innerHTML = "!";
		}

		
		item.appendChild(span);
	}
	 list.append(item);
	
}