describe ('pingpong', function () {
  it("is not pingpong if a number is not divisible by 5, and not divisible by 3", function () {
    expect(pingpong(29)).to.equal(false);
  // });
});

// describe ('pingpong', function () {
  it("is ping if a number is divisible by 3", function() {
    expect(pingpong(9)).to.equal("ping");
  });

  it("is pong if a number is divisible by 5", function() {
    expect(pingpong(10)).to.equal("pong");
  });

  it("is pingpong if a number is divisible by 5 and by 3", function() {
    expect(pingpong(15)).to.equal("pingpong");
  });
});
