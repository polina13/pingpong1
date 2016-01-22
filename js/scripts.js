
var numbersinarray = function(numberInput) {
  var output = [];
  for (var i=1; i <= numberInput; i++) {
    output.push(i);
  }
  return output;
};


var divisiblebythree = function(numberInput) {
	if (numberInput % 3 === 0) {
		return "ping";
	}
};

var divisiblebyfive = function(numberInput) {
	if (numberInput % 5 === 0) {
		return "pong";
	}
};

var divisiblebyfifteen = function(numberInput) {
	if ((numberInput % 5 === 0) && (numberInput % 3 === 0)) {
		return "pingpong";
	}
};

 var pingpongfinal = function(numberInput) {
    var output = numbersinarray(numberInput);
	  output.forEach(function(number, index, output) {
		if (divisiblebyfifteen(number) === 'pingpong') {
			output(index, "pingpong");
		} else if (divisiblebythree(number) === 'ping') {
			output.splice(index, "ping");
		} else if (divisiblebyfive(number) === 'pong') {
			output.splice(index, "pong");
		}
	});
	return output;
};

$(document).ready(function() {
	$("button#submit").click(function(event){
		event.preventDefault();

		var numberInput = $("input#writenumber").val();
		var finalResult = pingpongfinal(numberInput);

		finalResult.forEach(function(number) {
			$("ul#output").prepend("<li>" + number + "<li>");
		});
    //
		// $("input#numberInput").text(output);
	});
});
