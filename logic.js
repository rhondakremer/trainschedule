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

    database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    var storedInfo = snapshot.val();
    var trainNames = storedInfo.trainName;
    var trainDestinations = storedInfo.trainDestination;
    var trainFrequency = storedInfo.trainFrequency;
    var trainTimes = storedInfo.trainTime;

    var startMoment = moment(trainTimes,"HH:mm");
    var currentMoment = moment();
    var differenceInMinutes = currentMoment.diff(startMoment,"minutes");
    var remainder = differenceInMinutes%trainFrequency;
    var minutesToCompleteFrequency = trainFrequency-remainder;
    var nextTrainTime = currentMoment.add(minutesToCompleteFrequency,"minutes").format("HH:mm");
    var minutesUntilArrival = trainFrequency - remainder;
       
   
    /*$("#trainInfo").append("<td>" + trainNames);
    $("#trainInfo").append("<td>" + trainDestinations);
    $("#trainInfo").append("<td>" + trainFrequency);
    $("#trainInfo").append("<td>" + "Next Arrival");
    $("#trainInfo").append("<td>" + "Minutes Away");*/

    $("#trainInfo").append("<tr><td>" + trainNames + "</td><td>" + trainDestinations + "</td><td>" +trainFrequency + "</td><td>" + nextTrainTime + "</td><td>" + minutesUntilArrival + "</td></tr>");

    });





    $("#submitButton").click(function(event){
        event.preventDefault()
        //alert("you just clicked me!")

        var trainName = $("#trainNameInput").val().trim();
        //console.log(trainName)
        var trainDestination = $("#trainDestinationInput").val().trim();
        //console.log(trainDestination);
        var trainTime = $("#trainTimeInput").val().trim();
        //console.log(trainTime);
        var trainFrequency = $("#trainFrequencyInput").val().trim();
        //console.log(trainFrequency);

        database.ref().push({
            trainName: trainName,
            trainDestination: trainDestination,
            trainTime: trainTime,
            trainFrequency: trainFrequency
        });

        $("#trainNameInput").val("");
        $("#trainDestinationInput").val("")
        $("#trainTimeInput").val("")
        $("#trainFrequencyInput").val("")
    });




    
});