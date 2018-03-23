$(document).ready(function() {
  $("form").submit(function(event) {

    $("#css").hide();
    $("#c-sharp").hide();
    $("#java").hide();
    $("#php").hide();
    $("#ruby").hide();

    var inputName = $("#name").val();
    var inputFrontendBackend = $("input:radio[name=frontend-backend]:checked").val();
    var inputMobileDesktop = $("#mobile-desktop").val().charAt(0);
    var inputMacPc = $("#mac-pc").val().charAt(0);
    var inputBackendSize = $("#backend-size").val().charAt(0);
    var inputBackendPace = $("#backend-pace").val().charAt(0);


    console.log(inputName);
    console.log(inputFrontendBackend);
    console.log(inputMobileDesktop);
    console.log(inputMacPc);
    console.log(inputBackendSize);
    console.log(inputBackendPace);

    if (inputFrontendBackend === "frontend") {
      $("#form").hide();
      $("#css").fadeIn("slow");
    } else if (inputFrontendBackend === "backend" && (inputMacPc === "A" && inputBackendSize === "A")) {
      $("#form").hide();
      $("#c-sharp").fadeIn();
    } else if (inputFrontendBackend === "backend" && (inputMacPc === "B" && inputBackendSize === "A")) {
      $("#form").hide();
      $("#java").fadeIn();
    } else if (inputFrontendBackend === "backend" && (inputBackendPace === "B" && (inputBackendSize === "C" || inputBackendSize === "D"))) {
      $("#form").hide();
      $("#php").fadeIn();
    } else if (inputFrontendBackend === "backend" && (inputBackendPace === "B" && inputBackendSize === "B")) {
      $("#form").hide();
      $("#ruby").fadeIn();
    }

    event.preventDefault();
  });
});
