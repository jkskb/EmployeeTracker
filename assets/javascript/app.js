var employeeName = "";
var job = "";
var startDate = "";
var mRate = "";
var mWorked = "";
var tBilled = "";


$("#add-user").on("click", function(event) {
    event.preventDefault();
    startDate = $("#startAdd").val();
    console.log(startDate);

 employeeName = $("#name").val().trim();
 job = $("#role").val().trim();
 startDate = $("#start").val().trim();
 mRate = $("#rate").val().trim();
    console.log(job);

$("#name").text(sv.name);
$("#role").text(sv.role);
$("#start").text(sv.start);
$("#rate").text(sv.rate);
})
