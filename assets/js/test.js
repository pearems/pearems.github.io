//current energy consumption update picture
function update_member_profit(x) {
    $("#member_profit").text(String(x));
}
// function changedata(x) {
//     document.getElementById("solar").setAttribute("data-goal",String(x))
// }

function update_orders(y) {
    $("#orders").text(String(y));
}
function update_issues(a) {
    $("#issues").text(String(a));
}
function update_IPO(b) {
    $("#IPO").text(String(b));
}
function update_payments(c) {
    $("#payments").text(String(c));
}
function update_logistics(d) {
    $("#logistics").text(String(d));
}
function update_orders2(e) {
    $("#orders2").text(String(e));
}
function update_Transactions(f) {
    $("#Transactions").text(String(f));
}
function update_revenue(g) {
    $("#revenue").text(String(g));
}
// document.getElementById("solar").setAttribute("data-goal","20");

$( document ).ready(function() {
    console.log("starting document!!!!");
    // Initialize Firebase
    console.log("Initialize Firebase");
    $("#sssss").attr("data-goal","20");
    $("#s_solar").attr("value","20");
    $("#s_data").text("20%");
    console.log($("#sssss").attr("aria-valuenow"));
    $("#sss").text("data-goal");
    var config = {
    apiKey: "AIzaSyCYoatdk7_r48sY_ztPK6KRojWT6hKXA8I",
    authDomain: "my-project-4bc9b.firebaseapp.com",
    databaseURL: "https://my-project-4bc9b.firebaseio.com",
    projectId: "my-project-4bc9b",
    storageBucket: "my-project-4bc9b.appspot.com",
    messagingSenderId: "942408563134"
  };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    // total_load_activePower = 0;

    var member_profitRef = firebase.database().ref("member");
    // changedata(30)
    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if (data.key == "member_profit") {
            update_member_profit(parseInt(data.val()));
          }  else if (data.key == "orders") {
                update_orders(parseInt(data.val()));
          }  else if (data.key == "issues") {
                update_issues(parseInt(data.val()));
          }  else if (data.key == "IPO") {
                update_IPO(parseInt(data.val()));
          }  else if (data.key == "payments") {
                update_payments(parseInt(data.val()));
          }  else if (data.key == "logistics") {
                update_logistics(parseInt(data.val()));
          }  else if (data.key == "orders2") {
                update_orders2(parseInt(data.val()));
          }  else if (data.key == "Transactions") {
                update_Transactions(parseInt(data.val()));
          }  else if (data.key == "revenue") {
                update_revenue(parseInt(data.val()));

        } else {
            console.log("need to parse this key " + data.key)
        }
    });

});
