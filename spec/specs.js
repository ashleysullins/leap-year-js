describe('leapYear', function() { //first arg is a sting and the name of the function to be built
  it("is false for a year that is not divisible by 4", function() { //first arg is string descrip of behavior
    expect(leapYear(1999)).to.equal(false);
  });

  it("is true for most years divisible by 4", function() {
    expect(leapYear(2012)).to.equal(true);
  });

  it("is false for most years divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });

  it("is true if a year is divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });

});
