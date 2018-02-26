$(document).on("pagecreate","#homePage",function(){
    
    //HOME BUTTON
    $('#homeButton').on("click", function(){
    openHome();
    });  
   
    //DEADLINE BUTTON
    $('#deadlineButton').on("click", function(){
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
    
    
});            

//HOME BUTTON
function openHome() {
	$.mobile.navigate( "#homePage" );
}

//DEADLINE BUTTON
function openDeadlines() {
	$.mobile.navigate( "#deadlinePage" );
}

//TIMETABLE BUTTON
function openTimetable() {
	$.mobile.navigate( "#timetablePage" );
}

//SETTINGS BUTTON
function openSettings() {
	$.mobile.navigate( "#settingsPage" );
}

