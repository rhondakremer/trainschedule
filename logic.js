// form to submit train name, destination, first train time, and frequency in mins- on click preventdefault thing, captures information with .val and .trim, 
// on submit, should go to firebase, form cleared
// firebase event childadded goes to table console.log(childsnapshot.val.name, destination, etc)-- make var for childsnapshot.val.nam etc
// var for time array, .split to split string to split time at colon 
// moment.js for time math (moment max), .hours, .minutes, .max, 
// var tMinutes, var tArrival- if statement when train has already passed- if maxmoment = traintime, show time. 

//current time - first time, .dif, use modulus
// firebase info should display when page loads
$(document).ready(function() {
    console.log("I like big butts")

    var firebaseConfig = {
        apiKey: "AIzaSyDX6Pvg00T4oOWa2_4IzGKUE1Lxn450wA4",
        authDomain: "it-s-train-time.firebaseapp.com",
        databaseURL: "https://it-s-train-time.firebaseio.com",
        projectId: "it-s-train-time",
        storageBucket: "",
        messagingSenderId: "666511407036",
        appId: "1:666511407036:web:345b232ceb2588f2"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      var database = firebase.database();

    $("#submitButton").click(function(event){
        event.preventDefault()
        //alert("you just clicked me!")

        var trainName = $("#trainNameInput").val().trim();
        console.log(trainName)
        var trainDestination = $("#trainDestinationInput").val().trim();
        console.log(trainDestination);
        var trainTime = $("#trainTimeInput").val().trim();
        console.log(trainTime);
        var trainFrequency = $("#trainFrequencyInput").val().trim();
        console.log(trainFrequency);

        database.ref().push({
            trainName: trainName,
            trainDestination: trainDestination,
            trainTime: trainTime,
            trainFrequency: trainFrequency
        })
    });

    
    
});

