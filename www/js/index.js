document.addEventListener("deviceready", function () {
    console.log("enhance panel");
    $('#mypanel').enhanceWithin().panel();


    //OPEN MENU WITH SWIPE
    $('body').on('swiperight', function () {
        console.log("open panel with swipe");
    $('#mypanel').panel('open', '');
    });

});

//create new variable called options
var options = {
    date: new Date(), //sets value of date to current date
    mode: 'datetime'
    //allowOldDates: false, //prevents adding a date in the past
    //allowFutureDates: true,
};

var deadlines = [];


//If datepick opens
function onSuccess(date) {
    alert('Selected date: ' + date);
}

//if datepicker fails
function onError(error) { // Android only
    alert('Error: ' + error);
}


function loadDeadlines() {
            $('#dname1').val(localStorage.name1);
            $('#ddate1').val(localStorage.date1);
            $('#dname2').val(localStorage.name2);
            $('#ddate2').val(localStorage.date2);

        }

function saveDeadlines() {
            var dname1 = document.getElementById("dname1").value;
            var ddate1 = document.getElementById("ddate1").value;
            var dname2 = document.getElementById("dname2").value;
            var ddate2 = document.getElementById("ddate2").val();

            localStorage.dname1 = dname1;
            localStorage.ddate1 = ddate1;
            localStorage.dname2 = dname2;
            localStorage.ddate2 = ddate2;
        }


$(document).on("pagecreate", function () {

    console.log("page created");

    //HOME BUTTON
    $('#homeButton').on("click", function () { //run openHome function when home button is clicked
    openHome();
    });

    //DEADLINE BUTTON
    $('#deadlineButton').on("click", function () { //run openDeadlines function when deadline button is clicked
    openDeadlines();
    });

    //TIMETABLE BUTTON
    $('#timetableButton').on("click", function(){
    openTimetable();
    });

    //SETTINGS BUTTON
    $('#settingsButton').on("click", function(){
    openSettings();
    });

    //ADD DEADLINE BUTTON
    $('#addDeadlineButton').on("click", function(){
    openAddDeadline();
    });

    //SAVE BUTTON
    $('#saveButton').on("click", function(){
    save();
    });

    //CANCEL BUTTON
    $('#cancelButton').on("click", function(){
    cancel();
    });

    //DATE BUTTON
    $('#dateButton').on("click", function(){
    addDate();
    });

});

//HOME BUTTON
function openHome() {
    console.log("open home function running");
	$.mobile.navigate( "#homePage" ); //open home page
}

//DEADLINE BUTTON
function openDeadlines() {
    console.log("open deadlines function running");
	$.mobile.navigate( "#deadlinePage" ); //open deadline page
}

//TIMETABLE BUTTON
function openTimetable() {
    console.log("open timetable function running");
	$.mobile.navigate( "#timetablePage" ); //open timetable page
}

//SETTINGS BUTTON
function openSettings() {
    console.log("open settings function running");
	$.mobile.navigate( "#settingsPage" ); //open settings page
}

//ADD DEADLINE BUTTON
function openAddDeadline() {
    console.log("open add deadlines function running");
    $.mobile.navigate( "#addDeadlinePage" ); //open add deadline page
}

//ADD DATE BUTTON
function addDate() {
    console.log("open add date function running");
    options.date = datePicker.show(options, onSuccess, onError);
    $.mobile.navigate( "#addDeadlinePage" ); //open add deadline page
}

//SAVE
function save () {
  console.log("save function running");
  deadlines.append(dname1, ddate1);
}

//CANCEL
function cancel() {
  console.log("cancel function running");
	$.mobile.navigate( "#deadlinePage" ); //return to deadline page
}
