var numbersinarray = function(arrays) {
  var listNum = [];
  for (var i=1; i <= arrays; i++) {
    listNum.push(i);
  }
  return listNum;
}

var pingpong = function(numbers) {
  var listNum = numbersinarray(arrays);
    for(var i=0; i < listNum.lenght ; i ++) {
      if (listNum % 15 === 0) {
        
      }
    }
}

// var pingpong = function(upperLimit) {
//   var numbersList = createNumberList(upperLimit);
//   for (var i=0; i < numbersList.length; i++) {
//     if (numbersList[i] % 15 === 0) {
//       numbersList.splice(i, 1, "pingpong");
//     } else if (numbersList[i] % 5 === 0) {
//       numbersList.splice(i, 1, "pong");
//     } else if (numbersList[i] % 3 === 0) {
//       numbersList.splice(i, 1, "ping");
//     }
//   }
//   console.log(numbersList);
//   return numbersList;
// }



// var pingpong = function(number) {
//   var numbes= [];
//
//   if ((number % 3 === 0) && (number % 5 === 0)) {
//     return "pingpong";
//     }
//
//   if (number % 3 === 0) {
//     return "ping";
//     }
//
//   if (number % 5 === 0) {
//      return "pong"
//     }
//   }
