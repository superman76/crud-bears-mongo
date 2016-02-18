console.log('hello world');

function deleteBear (event) {
	event.preventDefault();

	var $button = $(event.target)  

	var id = $button.data("id");  
	

	console.log("Bear has been deleted: " + id)

	$.ajax("/api/bears/" + id, {method: "DELETE"}).done(function() {
		$button.closest('tr').remove();
	});
}

var addBear = function(event){
	event.preventDefault();

	var name = $('#name').val();
	var age = $('#age').val();
	var gender = $('#gender').val();

	var bear = {};
	bear.name = name;
	bear.age = age;
	bear.gender = gender;

// how to throw this (lines 25-28) to the server

	$.ajax({
		url: "/api/bears",
		method: "POST",
		data: bear
	}).done(function(data) {
	  console.log("I posted a bear", data);
})

	alert('you clicked the add bear button');
}
$('#addBear').on('click', addBear);
$('.deleteBear').on('click', deleteBear);
// This is an event subscription.  Anything with the class .deleteBear
// when it is clicked


















