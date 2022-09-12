
 var currentDay = $('#currentDay');

//display current day
var d = new Date();
newDay = moment(d).format('dddd, MMMM Do');  
currentDay.text(newDay);


