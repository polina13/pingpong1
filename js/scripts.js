var numbersinarray= function(number) {
	var output = [];
	for (var number = number; number > 0 ; number -= 1) {
		integerArray.push(number);
	}
	return output;
};

var divisiblebythree = function(number) {
	if (number % 3 === 0) {
		return "ping";
	}
};

var divisiblebyfive = function(number) {
	if (number % 5 === 0) {
		return "pong";
	}
};

var divisiblebyfifteen = function(number) {
	if ((number % 5 === 0) && (number % 3 === 0)) {
		return "pingpong";
	}
};

var pingpong = function(number) {
	var output = createArray(number);

	output.forEach(function(number, index, output) {
		if (divisiblebyfifteen(number) === 'pingpong') {
			output[index] = 'pingpong';
		} else if (divisiblebythree(number) === 'ping') {
			output[index] = 'ping';
		} else if (divisiblebyfive(number) === 'pong') {
			output[index] = 'pong';
		}
	});
	return output;
}

$(document).ready(function() {
	$("button#submit").click(function(event){
		event.preventDefault();

		var number = $("input#writenumber").val();
		var result = pingpong(number);

		result.forEach(function(number) {
			$("ul#output").prepend(" " + number + " ");
		});

		$("input#writenumber").reset();
	});
});
