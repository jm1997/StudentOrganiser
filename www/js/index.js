document.addEventListener("deviceready", function(){
    $('#mypanel').enhanceWithin().panel();
});

$(document).on("pagecreate","#homePage",function(){
    
    $(document).on("pageinit", "#homePage", function(openPanel) {
        if($.mobile.active.jqpData("mypanel")!== "open") {
        if(openPanel.type === "swiperight" ){
            $("#mypanel").panel("open");
        }
        }
    }
    
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

