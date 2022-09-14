
var currentDay = $('#currentDay');
var lists = $('.list-group');

var saveBtn = $('.saveBtn');
var newDiv;

$(document).ready(function () {// tells engine to load 1)html & 2)css first.
   
//display current day
newDay = moment().format('dddd, MMMM Do');  
currentDay.text(newDay);

 // saveBtn click listener 
$(".saveBtn").on("click", function () {
        // Get nearby values of the textArea in JQuery
        var text = $(this).siblings(".textArea").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
        
        //every savebtn remind added


        var createDiv = $('<div class="showAdded">Appoinment Added to <span style="color:Tomato;">localstorage</span> ✅</div>')
       
        $(".container").prepend(createDiv); 

        //after 3 seconds, the showAdded disappear
        setTimeout(fade_out, 2000);

        function fade_out() {
        $(".showAdded").fadeOut().empty();
        }

      
 })
console.log(localStorage);



//display different color on each list
function timeTracker(){
    var currentHour = moment().hour();
    console.log(currentHour);
        
    $( ".time-block" ).each(function() {
    var listTime = parseInt($(this).attr("id").split("hour")[1]); 
     if(listTime < currentHour){
        $(this).children('.textArea').removeClass("future");
        $(this).children('.textArea').removeClass("present");
        $(this).children('.textArea').addClass("past");

     }else if(listTime === currentHour){
        $(this).children('.textArea').removeClass("past");
        $(this).children('.textArea').removeClass("future");
        $(this).children('.textArea').addClass("present");
     }else{

        $(this).children('.textArea').removeClass("past");
        $(this).children('.textArea').removeClass("present");
        $(this).children('.textArea').addClass("future");
        }
    })

}
 timeTracker();

// Get item from local storage 
 $("#hour9 .textArea").val(localStorage.getItem("hour9"));
 $("#hour10 .textArea").val(localStorage.getItem("hour10"));
 $("#hour11 .textArea").val(localStorage.getItem("hour11"));
 $("#hour12 .textArea").val(localStorage.getItem("hour12"));
 $("#hour13 .textArea").val(localStorage.getItem("hour13"));
 $("#hour14 .textArea").val(localStorage.getItem("hour14"));
 $("#hour15 .textArea").val(localStorage.getItem("hour15"));
 $("#hour16 .textArea").val(localStorage.getItem("hour16"));
 $("#hour17 .textArea").val(localStorage.getItem("hour17"));
})