// $(document).ready(function() {
//   $("form").submit(function(event) {
//
//     $("#css").hide();
//     $("#c-sharp").hide();
//     $("#java").hide();
//     $("#php").hide();
//     $("#ruby").hide();
//     $("#form").hide();
//
//     var inputName = $("#name").val();
//     var inputFrontendBackend = $("input:radio[name=frontend-backend]:checked").val();
//     var inputMobileDesktop = $("#mobile-desktop").val().charAt(0);
//     var inputMacPc = $("#mac-pc").val().charAt(0);
//     var inputBackendSize = $("#backend-size").val().charAt(0);
//     var inputBackendPace = $("#backend-pace").val().charAt(0);
//
//
//     // console.log(inputName);
//     // console.log(inputFrontendBackend);
//     // console.log(inputMobileDesktop);
//     // console.log(inputMacPc);
//     // console.log(inputBackendSize);
//     // console.log(inputBackendPace);
//     if (inputName === "") {
//       $("#form").show();
//       $("#name-error").fadeIn();
//     } else {
//       if (inputFrontendBackend === "frontend") {
//         $("#css").fadeIn("slow");
//       } else if (inputFrontendBackend === "backend" && ((inputMacPc === "A" || inputMacPc === "C") && inputBackendSize === "A")) {
//         $("#c-sharp").fadeIn();
//       } else if (inputFrontendBackend === "backend" && (inputMacPc === "B" && (inputBackendSize === "A" || inputBackendSize === "C"))) {
//         $("#java").fadeIn();
//     } else if (inputFrontendBackend === "backend" && (inputBackendPace === "B" && (inputBackendSize === "B" || inputBackendSize === "C"))) {
//         $("#ruby").fadeIn();
//       } else {
//         $("#php").fadeIn();
//       }
//     }
//
//     $(".user-name").text(inputName)
//
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("form").submit(function(event) {

    $("#css").hide();
    $("#c-sharp").hide();
    $("#java").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#question1").hide();
    $("#question2").hide();

    var inputName = $("#name").val();



    // console.log(inputName);
    // console.log(inputFrontendBackend);
    // console.log(inputMobileDesktop);
    // console.log(inputMacPc);
    // console.log(inputBackendSize);
    // console.log(inputBackendPace);

    if (inputName === "") {
      $("#question1").show();
      $("#name-error").fadeIn();
    } else {
      $("#question2").fadeIn();
    }

    event.preventDefault();
  });

  $("form").submit(function(event) {



      var inputFrontendBackend = $("input:radio[name=frontend-backend]:checked").val();


      var inputMobileDesktop = $("#mobile-desktop").val().charAt(0);
      var inputMacPc = $("#mac-pc").val().charAt(0);
      var inputBackendSize = $("#backend-size").val().charAt(0);
      var inputBackendPace = $("#backend-pace").val().charAt(0);


      if (inputFrontendBackend === "frontend") {
        $("#css").fadeIn("slow");
      } else if (inputFrontendBackend === "backend" && ((inputMacPc === "A" || inputMacPc === "C") && inputBackendSize === "A")) {
        $("#c-sharp").fadeIn();
      } else if (inputFrontendBackend === "backend" && (inputMacPc === "B" && (inputBackendSize === "A" || inputBackendSize === "C"))) {
        $("#java").fadeIn();
    } else if (inputFrontendBackend === "backend" && (inputBackendPace === "B" && (inputBackendSize === "B" || inputBackendSize === "C"))) {
        $("#ruby").fadeIn();
      } else {
        $("#php").fadeIn();
      }
    });

    $(".user-name").text(inputName)

    event.preventDefault();
  });
});
