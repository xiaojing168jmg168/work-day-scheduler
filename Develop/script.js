
 var currentDay = $('#currentDay');

//display current day
//var d = new Date();
newDay = moment().format('dddd, MMMM Do');  
currentDay.text(newDay);

//display scroll down
$('.container').tooltip({ boundary: 'window' })


