//current energy consumption update picture
function update_member_profit(x) {
    $("#member_profit").text(String(x));
}

function set_pie_chart(x,y){
    tmp = "c100 p"+String(parseInt(y/3))+" big";
    $("#"+x).attr("class",tmp);  
    $("#"+x+"_text").text(String(parseInt(y/3))+"%");  
    console.log("change data");
}
// function changedata(x) {
//     document.getElementById("solar").setAttribute("data-goal",String(x))
// }


// document.getElementById("solar").setAttribute("data-goal","20");

$( document ).ready(function() {
    console.log("starting document!!!!");
    // Initialize Firebase
    // console.log("Initialize Firebase");


    var config = {
        apiKey: "AIzaSyDGQ36ZE2nTGHHHsd9kT0xlg2bFLsjvm4Q",
        authDomain: "python-training-6b3d2.firebaseapp.com",
        databaseURL: "https://python-training-6b3d2.firebaseio.com",
        projectId: "python-training-6b3d2",
        storageBucket: "python-training-6b3d2.appspot.com",
        messagingSenderId: "945887583845"
    };

    firebase.initializeApp(config);


    var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    // total_load_activePower = 0;

    var renew_Ref = firebase.database().ref("renewable");

    renew_Ref.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if (data.key == "solar"){
            set_pie_chart("pie_solar",data.val())
            // $("#pie_solar").text(String(parseInt(data.val())));
        }
    });

});
