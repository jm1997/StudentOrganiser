document.addEventListener("deviceready", function(){
    $('#mypanel').enhanceWithin().panel();
    
    //OPEN MENU WITH SWIPE
$('body').on('swiperight', function () {
    $('#mypanel').panel('open', '');
});
});





$(document).on("pagecreate","#homePage",function(){
    
    
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
	$.mobile.navigate( "#homePage" ); //open home page
}

//DEADLINE BUTTON
function openDeadlines() {
	$.mobile.navigate( "#deadlinePage" ); //open deadline page
}

//TIMETABLE BUTTON
function openTimetable() {
	$.mobile.navigate( "#timetablePage" ); //open timetable page
}

//SETTINGS BUTTON
function openSettings() {
	$.mobile.navigate( "#settingsPage" ); //open settings page
}

//ADD DEADLINE BUTTON
function openAddDeadline() {
	$.mobile.navigate( "#addDeadlinePage" ); //open add deadline page
}


//SAVE

//CANCEL
function cancel() {
	$.mobile.navigate( "#deadlinePage" ); //return to deadline page
}
