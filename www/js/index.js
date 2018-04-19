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
    date: new Date(),
    mode: 'datetime'
    allowOldDates: false, //prevents adding a date in the past
    allowFutureDates: true,
};
 
function onSuccess(date) {
    alert('Selected date: ' + date);
}
 
function onError(error) { // Android only 
    alert('Error: ' + error);
}


function loadDeadlines() {
            $('#name1').val(localStorage.name1);
            $('#date1').val(localStorage.date1);
            $('#name2').val(localStorage.name2);
            $('#date2').val(localStorage.date2);
        
        }

function saveDeadlines() {
            var name1 = document.getElementById("name1").value;
            var date1 = document.getElementById("date1").value;
            var name2 = document.getElementById("name2").value;
            var date2 = document.getElementById("date2").val();

            localStorage.name1 = name1;
            localStorage.date1 = date1;
            localStorage.name2 = name2;
            localStorage.date2 = date2;
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
    datePicker.show(options, onSuccess, onError);
}

//SAVE

//CANCEL
function cancel() {
    console.log("cancel function running");
	$.mobile.navigate( "#deadlinePage" ); //return to deadline page
}
