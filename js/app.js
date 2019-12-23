window.onload = function() {


	document.getElementById("button").onclick = submitForms;
}

const submitForms = function(e) {
	//this needs work
	e.preventDefault();
	const list = document.getElementById("ul")
	const firstItem = document.createElement("li");
	firstItem.innerHTML = "test";
	list.prepend(firstItem)
	console.log("test");

}