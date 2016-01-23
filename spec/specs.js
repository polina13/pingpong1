describe('numbersinarray', function () {
  it("will transform integers into array up to 15", function() {
    expect(numbersinarray(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});

describe('divisiblebythree', function () {
  it("will take number that is divisible by 3 and will display 'ping'", function () {
    expect(divisiblebythree(9)).to.equal("ping");
  });
});

describe('divisiblebyfive', function () {
  it("will take a number that is divisible by 5 and will display 'pong'", function () {
    expect(divisiblebyfive(10)).to.equal("pong");
  });
});

describe('divisiblebyfifteen', function () {
  it("will take a number that is divisible by 5 and 3 and will display 'pingpong'", function () {
    expect(divisiblebyfifteen(45)).to.equal("pingpong");
  });
});

// last test doesn't pass-not sure why, need to get explanation from teacher during code review
// made to work-mistake was the way arrays were written, it needs to start from 1 not from 15
describe('pingpongfinal', function() {
	it("will review the arrays and will replace nubmers divisible by 3 with 'ping', by 5 with 'pong' and by 3 and 5 with 'pingpong'.", function() {
		expect(pingpongfinal(15)).to.eql([1,2,"ping",4,"pong", "ping", 7,8, "ping", "pong", 11, "ping", 13,14,"pingpong"]);
	});
});
