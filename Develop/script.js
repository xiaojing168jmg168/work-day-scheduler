
 var currentDay = $('#currentDay');
var lists = $('.list-group');
//display current day
//var d = new Date();
newDay = moment().format('dddd, MMMM Do');  
currentDay.text(newDay);

//display different color on each list
function timeTracker(){
    var currentHour = moment().hour();
    console.log(currentHour);
        
    $( ".row" ).each(function() {
    var listTime = parseInt($(this).attr("id").split("hour")[1]); 
        console.log(listTime);
    var textArea = $('.textArea');
    console.log(textArea);
        if(listTime < currentHour){
        textArea.removeClass("future");
        textArea.removeClass("present");
        textArea.addClass("past");

        }else if(listTime > currentHour){
        textArea.removeClass("past");
        textArea.removeClass("present");
        textArea.addClass("future");

        }else{
        textArea.removeClass("past");
        textArea.removeClass("future");
        textArea.addClass("present");
        }
    })
}
timeTracker();