$(document).ready(function() {
  $("form").submit(function(event) {

    $("#css").hide();
    $("#c-sharp").hide();
    $("#java").hide();
    $("#php").hide();
    $("#ruby").hide();

    event.preventDefault();
  });
});
