//var definitions
var currentDay = $('#currentDay');
var container = $('.container');
var hours = ["9am", "10am", "11am" ,"12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var storedText = JSON.parse(localStorage.getItem('event'));
var event = [
    {"9am":{}},
    {"10am":{}},
    {"11am":{}},
    {"12pm":{}},
    {"1pm":{}},
    {"2pm":{}},
    {"3pm":{}},
    {"4pm":{}},
    {"5pm":{}}
];
//run
currentDay.text(moment().format('dddd, MMMM Do'));
//create timeblocks
for(var i = 0; i < hours.length; i++){
    //add hours, textarea, and save btn to each block
    var timeBlock = $('<div>').addClass("time-block row").attr('data-name', hours[i]);
    var hourBlock = $('<div>').addClass('hour col-1');
    var textBlock = $('<textarea>').addClass('description col');
    var SaveBtn = $('<button>').addClass('saveBtn col-1');
    var hour = moment(hours[i], 'hh A');

    SaveBtn.html('<i class="fas fa-archive"></i>')
    hourBlock.text(hour.format('hh A'));

    if (storedText !== null){
        event = storedText;
        textBlock.text(event[i].content);
    }
    function pastTime(){
        if(hour.format('hh A') === moment().format('hh A')){
            textBlock.addClass('present');
        }else if(hour.startOf('hour').isBefore()){
            textBlock.addClass('past');
        }else if (hour.startOf('hour').isAfter()){
            textBlock.addClass('future');
        }
    }

    pastTime();
    console.log(hour)
    console.log(hour === moment().startOf('hour'))


    console.log(moment(hours[i], 'hh A').format('hh A'));
    console.log(hourBlock.text())


    timeBlock.append(hourBlock);
    container.append(timeBlock);

    timeBlock.append(textBlock);
    timeBlock.append(SaveBtn);
    SaveBtn.on('click', saveText)


}
console.log(moment().startOf('hour').format('hh a'))
//function definitions

function saveText(){
    var text = $(this).siblings('textarea').val();
    var dateName = $(this).parents().attr('data-name');
    var index = hours.indexOf(dateName);
    console.log(dateName)
    console.log(index)
    event[index].content = text;


    console.log('save is clicked');
    localStorage.setItem('event', JSON.stringify(event));
}
