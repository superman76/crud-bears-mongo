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

$('.deleteBear').on('click', deleteBear);
// This is an event subscription.  Anything with the class .deleteBear
// when it is clicked



















