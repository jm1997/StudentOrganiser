document.addEventListener("deviceready", function () {
    console.log("enhance panel");
    $('#mypanel').enhanceWithin().panel();

    //OPEN MENU WITH SWIPE
    $('body').on('swiperight', function () {
        console.log("open panel with swipe");
    $('#mypanel').panel('open', '');
    });

});

  function deleteRow(rowElement) {
        rowElement.remove();
        //gets monday timetable elements inner html and turns it into string then replaces special characters with blank
        var deadlineTableContents = JSON.stringify(document.getElementById("deadlineList").innerHTML).replace(/\\n/g, "").replace(/\\"/g, "").replace(/\"/g, "");
        //saves to local storage
        localStorage.setItem("localDeadlineTableStorage", deadlineTableContents);
    }

//this runs everytime any page is created
$(document).on("pagecreate", function () {

    console.log("page created");

    //HOME BUTTON
    $('#homeButton').on("click", function () { //run openHome function when home button is clicked
    console.log("button clicked");
    openHome();
    });

    //DEADLINE BUTTON
    $('#deadlineButton').on("click", function () { //run openDeadlines function when deadline button is clicked
    console.log("button clicked");
    openDeadlines();
    });

    //TIMETABLE BUTTON
    $('#timetableButton').on("click", function(){
    console.log("button clicked");
    openTimetable();
    });
    
    //TIMETABLE BUTTON
    $('#reminderButton').on("click", function(){
    console.log("button clicked");
    openReminder();
    });
    
    //NOTIFICATION REMINDER BUTTON
    $('#notificationButton').on('click', function() {
		createReminder();
	});

});


//this runs everytime deadline page is created
$(document).on("pagecreate", "#deadlinePage", function () {

    console.log("deadline page created");
    
    //if there is something (not null) in local storage for tuesday
    if (localStorage.getItem("localDeadlineTableStorage") != null) {
        //replaces inner html with stored string
      document.getElementById("deadlineList").innerHTML = localStorage.getItem("localDeadlineTableStorage");
    }

    //ADD DEADLINE BUTTON
    $('#addDeadlineButton').on("click", function(){
    console.log("button clicked");
    openAddDeadline();
    });

})

//this runs everytime add deadline page is created
$(document).on("pagecreate", "#addDeadlinePage", function () {

    console.log("add deadline page created");

    //SAVE BUTTON
    $('#saveButton').on("click", function(){
    console.log("button clicked");
    save();
    });

    //CANCEL BUTTON
    $('#cancelButton').on("click", function(){
    console.log("button clicked");
    cancel();
    });

})

//this runs everytime timetable page is created
$(document).on("pagecreate", "#timetablePage", function () {
    
    //ADD TIMETABLE BUTTON
    $('#addTimetableButton').on("click", function(){
    console.log("button clicked");
    openAddTimetable();
    });

    console.log("timetable page created");
    //if there is something (not null) in local storage for monday
    if (localStorage.getItem("localMondayTableStorage") != null) {
        //replaces inner html with stored string
      document.getElementById("timetableMonday").innerHTML = localStorage.getItem("localMondayTableStorage");
    }
    
    //if there is something (not null) in local storage for tuesday
    if (localStorage.getItem("localTuesdayTableStorage") != null) {
        //replaces inner html with stored string
      document.getElementById("timetableTuesday").innerHTML = localStorage.getItem("localTuesdayTableStorage");
    }
    
    //if there is something (not null) in local storage for wednesday
    if (localStorage.getItem("localWednesdayTableStorage") != null) {
        //replaces inner html with stored string
      document.getElementById("timetableWednesday").innerHTML = localStorage.getItem("localWednesdayTableStorage");
    }

    //if there is something (not null) in local storage for thursday
    if (localStorage.getItem("localThursdayTableStorage") != null) {
        //replaces inner html with stored string
      document.getElementById("timetableThursday").innerHTML = localStorage.getItem("localThursdayTableStorage");
    }
    
    //if there is something (not null) in local storage forfriday
    if (localStorage.getItem("localFridayTableStorage") != null) {
        //replaces inner html with stored string
      document.getElementById("timetableFriday").innerHTML = localStorage.getItem("localFridayTableStorage");
    } 

})

//this runs everytime add timetable page is created
$(document).on("pagecreate", "#addTimetablePage", function () {

    console.log("add timetable page created");

    //SAVE BUTTON
    $('#saveButtonTimetable').on("click", function(){
    console.log("button clicked");
    saveTT();
    });

    //CANCEL BUTTON
    $('#cancelButtonTimetable').on("click", function(){
    console.log("button clicked");
    cancelTT();
    });

})

//HOME BUTTON
function openHome() {
    console.log("open home function running");
    //open home page
	$.mobile.navigate("#homePage"); 
}

//DEADLINE BUTTON
function openDeadlines() {
    console.log("open deadlines function running");
	$.mobile.navigate("#deadlinePage"); //open deadline page
    //empty the table
    deadlineList.innerHTML=""
    //run add to array function for each item in deadlines array
    deadlines.forEach(addToArray)
}

//TIMETABLE BUTTON
function openTimetable() {
    console.log("open timetable function running");
    //open timetable page
	$.mobile.navigate( "#timetablePage" ); 
}

    
//REMINDER BUTTON
function openReminder() {
    console.log("open reminder function running");
    //open reminder page
    $.mobile.navigate( "#reminderPage" ); 
}

//ADD DEADLINE BUTTON
function openAddDeadline() {
    console.log("open add deadlines function running");
    //open add deadline page
    $.mobile.navigate( "#addDeadlinePage" ); 
}

//ADD TIMETABLE BUTTON
function openAddTimetable() {
    console.log("open add timetable function running");
    //open add timetable page
    $.mobile.navigate( "#addTimetablePage" ); 
}

//ADD DATE BUTTON
function addDate() {
    console.log("open add date function running");
    //open add deadline page
    $.mobile.navigate( "#addDeadlinePage" ); 
}

//SAVE DEADLINES
function save () {
  //function for deleting row

  //selects deadline table
  var deadlineList = document.getElementById("deadlineList");
  //creates table row element <tr></tr>
  var row = document.createElement("tr");
  //creates table cell elements <td></td>
  var nameCell = document.createElement("td");
  var dateCell = document.createElement("td");
  var deleteCell = document.createElement("td");

  //creates button element
  var deleteButton = document.createElement("BUTTON");
    //creates delete for button elemtnet
  var deleteButtonText = document.createTextNode("Delete");
    //adds button text from above to button element above
  deleteButton.appendChild(deleteButtonText);
    //sets onclick equal to the function above
  deleteButton.setAttribute('onclick', "deleteRow(this.parentElement.parentElement)");

    //creates text for name of deadline for name cell
  var nameCellText = document.createTextNode(deadlineName.value);
    //creates text for date of deadline for name cell
  var dateCellText = document.createTextNode(new Date(deadlineDate.value));

    //adds text to cell element
  nameCell.appendChild(nameCellText);
    //adds text to cell element
  dateCell.appendChild(dateCellText);
    //adds delete button delete cell element
  deleteCell.appendChild(deleteButton)

  //adds everything to row element
  row.appendChild(dateCell);
  row.appendChild(nameCell);
  row.appendChild(deleteCell);
    
    //adds row elemetn to deadline table
  deadlineList.appendChild(row);
    
    //gets monday timetable elements inner html and turns it into string then replaces special characters with blank
    var deadlineTableContents = JSON.stringify(document.getElementById("deadlineList").innerHTML).replace(/\\n/g, "").replace(/\\"/g, "").replace(/\"/g, "");
    //saves to local storage
    localStorage.setItem("localDeadlineTableStorage", deadlineTableContents);
  
  //open deadline page
  $.mobile.navigate( "#deadlinePage" );

}

//CANCEL
function cancel() {
  console.log("cancel function running");
	$.mobile.navigate( "#deadlinePage" ); //return to deadline page
}

//SAVE TIMETABLE
function saveTT() {
  // gets the selected date value and sets it to lowercase
  var lectureDay =  dayPicker.options[dayPicker.options.selectedIndex].value.toLowerCase()

  // gets the name of the lecture
  var lectureName = document.getElementById("lectureName").value;

  // gets the time of the lecture
  var lectureTime = document.getElementById("lectureTime").value;

  // picks the correct slot by combining the lectureday and lecture time
  var timetableSlot = document.getElementById(lectureDay + lectureTime);

  // sets the value of the above slot with the string entered into the lectureName
  timetableSlot.innerHTML = lectureName;

    //gets monday timetable elements inner html and turns it into string then replaces special characters with blank
    var mondayTableContents = JSON.stringify(document.getElementById("timetableMonday").innerHTML).replace(/\\n/g, "").replace(/\\"/g, "").replace(/\"/g, "");
    //saves to local storage
    localStorage.setItem("localMondayTableStorage", mondayTableContents);
    
    //gets tuesday timetable elements inner html and turns it into string then replaces special characters with blank
    var tuesdayTableContents = JSON.stringify(document.getElementById("timetableTuesday").innerHTML).replace(/\\n/g, "").replace(/\\"/g, "").replace(/\"/g, "");
    //saves to local storage
    localStorage.setItem("localTuesdayTableStorage", tuesdayTableContents);
    
    //gets wednesday timetable elements inner html and turns it into string then replaces special characters with blank
    var wednesdayTableContents = JSON.stringify(document.getElementById("timetableWednesday").innerHTML).replace(/\\n/g, "").replace(/\\"/g, "").replace(/\"/g, "");
    //saves to local storage
    localStorage.setItem("localWednesdayTableStorage", wednesdayTableContents);
    
    //gets thursday timetable elements inner html and turns it into string then replaces special characters with blank
    var thursdayTableContents = JSON.stringify(document.getElementById("timetableThursday").innerHTML).replace(/\\n/g, "").replace(/\\"/g, "").replace(/\"/g, "");
    //saves to local storage
    localStorage.setItem("localThursdayTableStorage", thursdayTableContents);
    
    //gets friday timetable elements inner html and turns it into string then replaces special characters with blank
    var fridayTableContents = JSON.stringify(document.getElementById("timetableFriday").innerHTML).replace(/\\n/g, "").replace(/\\"/g, "").replace(/\"/g, "");
    //saves to local storage
    localStorage.setItem("localFridayTableStorage", fridayTableContents);


	$.mobile.navigate( "#timetablePage" ); //return to timetable page
}

//CANCEL timetable
function cancelTT() {
  console.log("cancel timetable function running");
	$.mobile.navigate( "#timetablePage" ); //return to timetable page
}

function createReminder() {
    
    var reminderContent = reminderName.value
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"S.O.S Reminder",
        message: 	reminderContent,
   	});
    
}
    