// like function on the product
$('.heart').on('click', function(event) {
	var element = $(this).css('color');
  	if(element == 'rgb(255, 0, 0)'){
    	$(event.currentTarget).css('color', 'black');
  	} else{
  		$(event.currentTarget).css('color', 'red');
  	}
});

// Product quantity add and minus

$('.plus-btn').on('click', function(event) {
	// event.preventDefault();
	var $input = $(this).closest('div').find('input');
	var value = parseInt($input.val());
	value += 1;
	$input.val(value);
})

$('.minus-btn').on('click', function(event) {
	// event.preventDefault();
	var $input = $(this).closest('div').find('input');
	var value = parseInt($input.val());
	value -= 1;
	if(value < 0){value = 0;}
	$input.val(value);
})

$('.plant-img').on('click', function(event) {
	// var element = $(this).css('color');
 //  	if(element == 'rgb(255, 0, 0)'){
 //    	$(event.currentTarget).css('color', 'black');
 //  	} else{
 //  		$(event.currentTarget).css('color', 'red');
 //  	}
	console.log("aaaaa");
 	window.location.href = "bird-of-paradise.html";
});

$('.plant-name').on('click', function(event) {
	console.log("aaaaa");
 	window.location.href = "bird-of-paradise.html";
});

$('.add-to-cart').on('click', function(event) {
	alert("Successfully added to cart!");
});
