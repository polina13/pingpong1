 describe ('pingpong', function () {
  it("will be ping if a number is disible by 3 and it is replaced with ping in range of numbers", function () {
    expect(pingpong(6)).to.equal("ping");
  });
  // it("will be pong if a number is divisible by 5", function() {
  //   expect(pingpong(10)).to.equal("pong");
  // });
  it("is pingpong if a number is divisible by 15", function() {
    expect(pingpong(45)).to.equal("pingpong");
  });
});
//
// it("will be ping if a number is disible by 3 and it is replaced with ping in range of numbers", function () {
//   expect(pingpong(6)).to.eql([1,2,ping,3,4,5,ping]);
