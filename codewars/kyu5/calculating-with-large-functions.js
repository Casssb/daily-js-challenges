function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus(num1)      { return function(num2) { return num2 + num1; }; };
function minus(num1)     { return function(num2) { return num2 - num1; }; };
function times(num1)     { return function(num2) { return num2 * num1; }; };
function dividedBy(num1) { return function(num2) { return Math.floor(num2 / num1); }; };

/* describe('static example calculations', function() {
    Test.assertEquals(seven(times(five())), 35);
    Test.assertEquals(four(plus(nine())), 13);
    Test.assertEquals(eight(minus(three())), 5);
    Test.assertEquals(six(dividedBy(two())), 3);
  });
  
  describe('random calculations', function() {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
    it('add', function() {
      for (let i=0; i<50; i++) {
        let num1 = Test.sample(numbers);
        let num2 = Test.sample(numbers);
        Test.assertEquals(eval(num1 + '(plus(' + num2 + '()))'), numbers.indexOf(num1) + numbers.indexOf(num2), 'Wrong result for ' + num1 + ' + ' + num2);
      }
    });
    
    it('subtract', function() {
      for (let i=0; i<50; i++) {
        let num1 = Test.sample(numbers);
        let num2 = Test.sample(numbers);
        Test.assertEquals(eval(num1 + '(minus(' + num2 + '()))'), numbers.indexOf(num1) - numbers.indexOf(num2), 'Wrong result for ' + num1 + ' - ' + num2);
      }
    });
    
    it('multiply', function() {
      for (let i=0; i<50; i++) {
        let num1 = Test.sample(numbers);
        let num2 = Test.sample(numbers);
        Test.assertEquals(eval(num1 + '(times(' + num2 + '()))'), numbers.indexOf(num1) * numbers.indexOf(num2), 'Wrong result for ' + num1 + ' * ' + num2);
      }
    });
    
    it('divide', function() {
      for (let i=0; i<50; i++) {
        let num1 = Test.sample(numbers);
        let num2 = Test.sample(numbers.slice(1));
        Test.assertSimilar(eval(num1 + '(dividedBy(' + num2 + '()))'), numbers.indexOf(num1) / numbers.indexOf(num2)|0, 'Wrong result for ' + num1 + ' / ' + num2);
      }
    });
  }); */