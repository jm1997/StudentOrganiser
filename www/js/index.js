document.addEventListener("deviceready", function() {
    console.log("enhance panel");
    $('#mypanel').enhanceWithin().panel();
    
    
    //OPEN MENU WITH SWIPE
    $('body').on('swiperight', function () {
        console.log("open panel with swipe");
    $('#mypanel').panel('open', '');
    });
    
});

var options = {
    date: new Date(),
    mode: 'date'
};
 
function onSuccess(date) {
    alert('Selected date: ' + date);
}
 
function onError(error) { // Android only 
    alert('Error: ' + error);
}
 

$(document).on("pagecreate",function(){
    
    console.log("page created");
    
    //HOME BUTTON
    $('#homeButton').on("click", function(){ //run openHome function when home button is clicked
    openHome();
    });  
   
    //DEADLINE BUTTON
    $('#deadlineButton').on("click", function(){ //run openDeadlines function when deadline button is clicked
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
    datePicker.show(options, onSuccess, onError);
	//$.mobile.navigate( "#addDeadlinePage" ); //open add deadline page
}


//SAVE

//CANCEL
function cancel() {
    console.log("cancel function running");
	$.mobile.navigate( "#deadlinePage" ); //return to deadline page
}
