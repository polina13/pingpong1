describe("numbersinarray", function () {
  it("will transform integers into array up to 15", function() {
    expect(numbersinarray(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});

describe("pingpong", function () {
  it("will replace numbers divisible by 15 from the array with the word pingpong", function() {
    expect(pingpong(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"]);
  });

  it("will replace numbers divisible by 5 from the loop with the word pong", function() {
    expect(pingpong(10)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong"]);
  });

  it("will replace numbers divisible by 3 from the array of with ping", function() {
    expect(pingpong(9)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping"]);
  });

});
