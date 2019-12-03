describe("findPartMaxProd", function() {
  it("should return [[3, 3, 2], 18] for input 8", function() {
    chai.assert.deepEqual(findPartMaxProd(8), [[3, 3, 2], 18]);
  });
  it("should return [[4, 3, 3], [3, 3, 2, 2], 36] for input 10", function() {
    chai.assert.deepEqual(findPartMaxProd(10), [[4, 3, 3], [3, 3, 2, 2], 36]);
  });
});
