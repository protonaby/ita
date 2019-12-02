describe("Sample tests", function() {

  it("Tests", function() {
    expect(menStillStanding([])).toEqual([11, 11]);
    expect(menStillStanding(["A4Y", "A4Y"])).toEqual([10, 11]);
    expect(menStillStanding(["A4Y", "A4R"])).toEqual([10, 11]);
    expect(menStillStanding(["A4Y", "A5R", "B5R", "A4Y", "B6Y"])).toEqual([9, 10]);
    expect(menStillStanding(["A4R", "A4R", "A4R"])).toEqual([10, 11]);
    expect(menStillStanding(["A4R", "A6R", "A8R", "A10R", "A11R"])).toEqual([6, 11]);
  });

});
