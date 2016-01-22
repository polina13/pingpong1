describe ('pingpong', function () {
  it("is ping if a number is divisible by 3", function() {
    expect(pingpong(9)).to.equal("ping");
  });

  it("is pong if a number is divisible by 5", function() {
    expect(pingpong(10)).to.equal("pong");
  });

  it("is pingpong if a number is divisible by 15", function() {
    expect(pingpong(45)).to.equal("pingpong");
  });
});
