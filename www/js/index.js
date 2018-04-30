document.addEventListener("deviceready", function () {
    console.log("enhance panel");
    $('#mypanel').enhanceWithin().panel();


    //OPEN MENU WITH SWIPE
    $('body').on('swiperight', function () {
        console.log("open panel with swipe");
    $('#mypanel').panel('open', '');
    });

});

//create deadlines array
var deadlines = [];

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

});


//this runs everytime deadline page is created
$(document).on("pagecreate", "#deadlinePage", function () {
    
    console.log("deadline page created");

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
    
    console.log("timetable page created");
    
    //ADD TIMETABLE BUTTON
    $('#addTimetableButton').on("click", function(){
    console.log("button clicked");
    openAddTimetable();
    });

})   

//this runs everytime timetable page is created
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
               
//DEADLINE ARRAY
function addToArray(item) {
    //select element with ID of deadlineList
  deadlineTable = document.getElementById("deadlineList")

    //create delete button
  var deleteButton = document.createElement("BUTTON");
    //create text for button
  var deleteButtonText = document.createTextNode("Delete");
    //add text to button
  deleteButton.appendChild(deleteButtonText);


    function deleteRow() {
        //selects a row number
        var rowIndex = this.parentElement.parentElement.rowIndex;
        //removes one element from deadlines array at the row number just selected
        deadlines.splice(rowIndex, 1);
        //removes from table row
        this.parentElement.parentElement.remove();
        
        console.log("deadline deleted");
    }

    //when delete button clicked does above function
    deleteButton.onclick=deleteRow;

    //create table and cell content
  var row = deadlineTable.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = item[0].deadlineName;
  cell2.innerHTML = new Date(item[1].deadlineDate);
  cell3.appendChild(deleteButton);

}

//HOME BUTTON
function openHome() {
    console.log("open home function running");
	$.mobile.navigate("#homePage"); //open home page
}

//DEADLINE BUTTON
function openDeadlines() {
    console.log("open deadlines function running");

	$.mobile.navigate("#deadlinePage"); //open deadline page

    //empty table
    deadlineList.innerHTML=""
    //run add to array function for each item in deadlines array
    deadlines.forEach(addToArray)

}

//TIMETABLE BUTTON
function openTimetable() {
    console.log("open timetable function running");
	$.mobile.navigate( "#timetablePage" ); //open timetable page
}

//ADD DEADLINE BUTTON
function openAddDeadline() {
    console.log("open add deadlines function running");
    $.mobile.navigate( "#addDeadlinePage" ); //open add deadline page


}

//ADD TIMETBALE BUTTON
function openAddTimetable() {
    console.log("open add timetable function running");
    $.mobile.navigate( "#addTimetablePage" ); //open add timetable page

}

//ADD DATE BUTTON
function addDate() {
    console.log("open add date function running");
    options.date = datePicker.show(options, onSuccess, onError);
    $.mobile.navigate( "#addDeadlinePage" ); //open add deadline page
}

//SAVE DEADLINES
function save () {

  console.log("save function running");

  //creates array called deadline
  var deadline = [];

    //add deadline name to deadline array
  deadline.push({
    deadlineName: deadlineName.value
  });
   //add deadline date to deadline array
    deadline.push({
    deadlineDate: deadlineDate.value
  });

    //run add to array function for each item in deadlines array
    deadlineList.innerHTML=""
    deadlines.forEach(addToArray)

  //add all info to deadlines array
  deadlines.push(deadline);

  //print deadlines array to console
  console.log(deadlines);

  //open deadline page
  $.mobile.navigate( "#deadlinePage" );

}



//CANCEL
function cancel() {
  console.log("cancel function running");
	$.mobile.navigate( "#deadlinePage" ); //return to deadline page
}

/*
function saveTimetableLocal() {
            var lectureDay = document.getElementById("lectureDay").value;

            localStorage.lectureDay = lectureDay;

        }
        
        */

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

    //saveTimetableLocal();
    localStorage.setItem("lectureName", lectureName);
    localStorage.setItem("lectureDay", lectureDay);
    
    var mondayTableContents = document.getElementById(timetableMonday).innerHTML;
    
	$.mobile.navigate( "#timetablePage" ); //return to timetable page
}

//CANCEL timetable
function cancelTT() {
  console.log("cancel timetable function running");
	$.mobile.navigate( "#timetablePage" ); //return to timetable page
}
