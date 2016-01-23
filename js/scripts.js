
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
      output.splice(index,1, "pingpong");
		} else if (divisiblebythree(number) === 'ping') {
		  output.splice(index,1, "ping");
		} else if (divisiblebyfive(number) === 'pong') {
		  output.splice(index,1,"pong");
		}
	});
	return output;
};

$(document).ready(function() {
	$("button#submit").click(function(event){

		var numberInput =$("input#writenumber").val();
		var finalResult = pingpongfinal(numberInput);

		finalResult.forEach(function(number) {
			$("ul#output").append("<li>" + number + "<li>");
		});
     $("#pingpongfinal").append("</ul>");
        event.preventDefault();
	});
});
