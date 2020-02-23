//var definitions
var currentDay = $('#currentDay');
var container = $('.container');
var hours = ["9am", "10am", "11am" ,"12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
//run
currentDay.text(moment().format('dddd, MMMM Do'));
//create timeblocks
for(var i = 0; i < hours.length; i++){
    //add hours, textarea, and save btn to each block
    var timeBlock = $('<div>').addClass("time-block row");
    var hourBlock = $('<div>').addClass('hour');
    var textBlock = $('<textarea>').addClass('description future');
    var SaveBtn = $('<button>').addClass('saveBtn');

    SaveBtn.html('<i class="fas fa-archive"></i>')
    hourBlock.text(hours[i]);

    timeBlock.append(hourBlock);
    container.append(timeBlock);

    timeBlock.append(textBlock);
    timeBlock.append(SaveBtn);


}
//function definitions

