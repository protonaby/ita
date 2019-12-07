describe("checkArray", function() {
  it("should return true for input [1, 3, 4, 6, 8], -2", function() {
    chai.assert.deepEqual(checkArray([1, 3, 4, 6, 8], -2), true);
  });
  it("should return true for input [15, 2, 3], 10", function() {
    chai.assert.deepEqual(checkArray([15, 2, 3], 10), true);
  });
  it("should return false for input [1, 5, 3, 2, 5], -2", function() {
    chai.assert.deepEqual(checkArray([1, 5, 3, 2, 5], -2), false);
  });
});
