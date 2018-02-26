$(document).on("pagecreate","#homePage",function(){
    
    $('#homeButton').on("click", function(){
    openHome();
    });  
   
    $('#deadlineButton').on("click", function(){
    openDeadlines();
    }); 
    
    $('#timetableButton').on("click", function(){
    openTimetable();
    }); 
    
    $('#settingsButton').on("click", function(){
    openSettings();
    }); 
    
});            


function openHome() {
	$.mobile.navigate( "#homePage" );
}

function openDeadlines() {
	$.mobile.navigate( "#deadlinePage" );
}

function openTimetable() {
	$.mobile.navigate( "#timetablePage" );
}

function openSettings() {
	$.mobile.navigate( "#settingsPage" );
}