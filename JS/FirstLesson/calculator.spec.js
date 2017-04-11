describe('calculator tests', function() {

  it('should add two numbers', function() {
    //given
    var a=1, b=4, result;

    //when
    result = calculator.add(a,b);

    //then
    expect(result).toBe(5);
  });

});
