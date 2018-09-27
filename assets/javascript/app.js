var employeeName = "";
var job = "";
var startDate = "";
var mRate = "";
var mWorked = "";
var tBilled = "";


$("#submit").on("click", function(event){
    event.preventDefault();
    startDate = $("#startAdd").val();
    console.log(startDate);

var employeeName = $("#name").val().trim();
var job = $("#job").val().trim();
var startDate = $("#start").val().trim();
var mRate = $("#rate").val().trim();
    console.log(job);
})
