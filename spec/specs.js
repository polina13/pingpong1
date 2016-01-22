describe ('pingpong', function () {
  it("is ping if a number is divisible by 5 and 3", function() {
    expect(pingpong(15)).to.equal("pingpong");
  });

  // it("is pong if a number is divisible by 5", function() {
  //   expect(pingpong(10)).to.equal("pong");
  // });
  //
  // it("is pingpong if a number is divisible by 15", function() {
  //   expect(pingpong(45)).to.equal("pingpong");
  // });
});
