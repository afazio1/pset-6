let array = [];

//toggles completion
$("ul").on("click", "li", function(event){

	$(this).toggleClass("completed");

});
//toggles priority and deletion
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
		
	}
	else if ($(this).hasClass("trash")) {

		const id = $(this)[0].id.substring(7);
		array.splice(id, 1);
		$(this).parent().remove();

		event.stopPropagation();
	}

});
//adds items to list & array
$("span").click(function(event){
	input = $("input");
	inputValue = input.val();
	if(event.target.id === "button") {
		if (inputValue === null || inputValue === "") {
			return;
		}

		//makes object based on what user enters and pushes it to an array
		array.push({
			id: array.length,
			content: inputValue,
		});

		const item = array[array.length - 1];

		$(input).val("");
		//create a new li and add to ul
		$("ul").append("<li><span class='priority'><i class='fa fa-exclamation-circle'></i></span><span id=delete-" + item.id + " class='trash'><i class='fa fa-trash'></i></span> " + item.content + " <span class='sort'><i class='fa fa-arrows'></i></span></li>");
	}
});

