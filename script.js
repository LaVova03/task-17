
$('#getUp').after("<div>Modal window<div>");
$('div').attr('id', 'but');
$('#but').append("<button>come back<button");
$('#but').children('button').attr('id', 'back');
$('#but').css({ 'display': 'none', 'color': 'red', 'margin-top': '10px', 'border': '2px solid black', 'width': '200px', 'height': '50px', 'text-align': 'center', });


const fan = $('#getUp').on('click', function () {
    $('#but').fadeIn(1000);
});


$('#back').on('click', function () {
    $('#but').css({ 'display': 'none' });
});
