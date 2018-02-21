$(document).ready(function() {
    $('.headerbutton').on('click', function() {
        $('.lanes').append('<div class="lane"><div class="lanebuttons"><button class="move purple"><i class="fa fa-angle-left"></i></button><button class="lanebutton removebutton">Remove Lane</button><button class="lanebutton addcard">Add A Card</button><button class="move purple"><i class="fa fa-angle-right"></i></button></div></div>')

    });

    $('.lanes').on('click','removebutton', function(){
    	 $(this).closest('.card').remove();
    });
    $('.lanes').on('click','.addcard', function(){
    	$('.lane').append('<div class="card"><div class="cardbuttons"><button class="move blue"><i class="fa fa-angle-left"></i></button><button class="cardbutton">Add Task</button><button class="cardbutton removebutton">Remove Card</button><button class="move blue"><i class="fa fa-angle-right"></i></button></div></div>')
    });

});