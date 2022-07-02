function towerBuilder(nFloors) {
    let spaceCount = nFloors -1
    let counter = 1;
    let starCount = 1
    let space = ' ';
    let star = '*'
    let result = []
    while (counter <= nFloors) {
      result.push(`${space.repeat(spaceCount)}${star.repeat(starCount)}${space.repeat(spaceCount)}`);
      counter += 1;
      starCount += 2;
      spaceCount -=1;
    }
    return result;
  };
/* 
  describe("towerBuilder", function(){
    it("Basic Test", function(){
      Test.assertDeepEquals(towerBuilder(1), ["*"]);
      Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
      Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
    });
    it("Blanket Test", function(){
      for(let n = 1; n < 100; ++n){
        Test.assertDeepEquals(towerBuilder(n), sol(n));
      }
    });
  }); */