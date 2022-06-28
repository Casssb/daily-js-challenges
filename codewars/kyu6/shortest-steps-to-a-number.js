function shortestStepsToNum(num) {
    let count = 0;
    while(num > 1) {
      num % 2 === 0 ? num /= 2 : num--;
      count++
    }
    return count;
  };

/*   describe("Simple Tests", function() {
    assert.deepEqual(shortestStepsToNum(1), 0);
    assert.deepEqual(shortestStepsToNum(12), 4);
    assert.deepEqual(shortestStepsToNum(16), 4);
    assert.deepEqual(shortestStepsToNum(71), 9);
  });
  
  describe("Small Numbers", function() {
    assert.deepEqual(shortestStepsToNum(2), 1);
    assert.deepEqual(shortestStepsToNum(3), 2);
    assert.deepEqual(shortestStepsToNum(4), 2);
    assert.deepEqual(shortestStepsToNum(5), 3);
    assert.deepEqual(shortestStepsToNum(6), 3);
    assert.deepEqual(shortestStepsToNum(7), 4);
    assert.deepEqual(shortestStepsToNum(8), 3);
    assert.deepEqual(shortestStepsToNum(9), 4);
    assert.deepEqual(shortestStepsToNum(10), 4);
    assert.deepEqual(shortestStepsToNum(20), 5);
    assert.deepEqual(shortestStepsToNum(30), 7);
    assert.deepEqual(shortestStepsToNum(40), 6);
    assert.deepEqual(shortestStepsToNum(50), 7);
    assert.deepEqual(shortestStepsToNum(11), 5);
    assert.deepEqual(shortestStepsToNum(24), 5);
    assert.deepEqual(shortestStepsToNum(37), 7);
    assert.deepEqual(shortestStepsToNum(19), 6);
    assert.deepEqual(shortestStepsToNum(48), 6);
    assert.deepEqual(shortestStepsToNum(59), 9);
    assert.deepEqual(shortestStepsToNum(65), 7);
    assert.deepEqual(shortestStepsToNum(73), 8);
    assert.deepEqual(shortestStepsToNum(83), 9);
    assert.deepEqual(shortestStepsToNum(64), 6);
    assert.deepEqual(shortestStepsToNum(99), 9);
    assert.deepEqual(shortestStepsToNum(100), 8);
  });
  
  describe("Big Numbers", function() {
    assert.deepEqual(shortestStepsToNum(10000), 17);
    assert.deepEqual(shortestStepsToNum(1500), 16);
    assert.deepEqual(shortestStepsToNum(1534), 18);
    assert.deepEqual(shortestStepsToNum(1978), 17);
    assert.deepEqual(shortestStepsToNum(2763), 17);
    assert.deepEqual(shortestStepsToNum(9999), 20);
    assert.deepEqual(shortestStepsToNum(2673), 16);
    assert.deepEqual(shortestStepsToNum(4578), 17);
    assert.deepEqual(shortestStepsToNum(9876), 18);
    assert.deepEqual(shortestStepsToNum(2659), 16);
    assert.deepEqual(shortestStepsToNum(7777), 18);
    assert.deepEqual(shortestStepsToNum(9364), 17);
    assert.deepEqual(shortestStepsToNum(7280), 17);
    assert.deepEqual(shortestStepsToNum(4998), 17);
    assert.deepEqual(shortestStepsToNum(9283), 17);
    assert.deepEqual(shortestStepsToNum(8234), 16);
    assert.deepEqual(shortestStepsToNum(7622), 19);
    assert.deepEqual(shortestStepsToNum(800), 11);
    assert.deepEqual(shortestStepsToNum(782), 13);
    assert.deepEqual(shortestStepsToNum(674), 12);
    assert.deepEqual(shortestStepsToNum(4467), 18);
    assert.deepEqual(shortestStepsToNum(1233), 14);
    assert.deepEqual(shortestStepsToNum(3678), 18);
    assert.deepEqual(shortestStepsToNum(7892), 19);
    assert.deepEqual(shortestStepsToNum(5672), 16);
  });
  
  describe("Small Random Numbers", function() {
      let min = 1; 
      let max = 1001;
      for(let i = 0; i < 50; i++) {
        let num = Math.floor(Math.random() * (+max - +min)) + +min; 
        assert.deepEqual(shortestStepsToNum(num), expectedValue(num));
      }   
  });
  
  describe("Big Random Numbers", function() {
      let min = 1000; 
      let max = 10001;
      for(let i = 0; i < 50; i++) {
        let num = Math.floor(Math.random() * (+max - +min)) + +min; 
        assert.deepEqual(shortestStepsToNum(num), expectedValue(num));
      }   
  }); */