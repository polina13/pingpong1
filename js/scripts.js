var pingpong = function(number) {


  for (var i=1; i <= number; i++) {
    if ( (i % 3 === 0) && (i % 5 === 0)) {
      number = "pingpong"
    }
  }

    return number
    // if (i % 15 === 0) {
    //   numbers.push("pingpong");
    //   return pingpong;
    // }else if ( i % 3 === 0) {
    //   numbers.push("ping");
    // }else if ( i % 5 === 0) {
    //   numbers.push("pong");
    // }else {
    //   return false;
    //   numbers.push(i);
    // }


  // $(document).ready(function () {
  //   $("form#submit").submit(function(event) {
  //     var number = parseInt($("input#inputnumber").val());
  //     $(".output").append(numbers);
  //   });
  //   (event).preventDefault();
  //
  // });
  //   // return numbers;
};
