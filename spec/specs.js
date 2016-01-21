describe ('pingpong', function () {
  it("is not pingpong if a number is not divisible by 5, and not divisible by 3", function () {
    expect(pingpong(29)).to.equal(false);
  });
});
