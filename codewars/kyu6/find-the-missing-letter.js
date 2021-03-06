function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i].charCodeAt();
    let next = array[i + 1].charCodeAt();
    if (next - current !== 1) {
      return String.fromCharCode(current + 1);
    }
  }
};


/* describe("KataTests", function(){
    it("exampleTests", function(){
      Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
      Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
    });
    it("randomTest", function(){
      for(let r=0;r<30;r++)
      {
        let len = Math.floor(Math.random() * 7 + 3);
        let missingIdx = Math.floor(Math.random() * (len - 2) + 1);
        let start = Math.floor(Math.random() * (90-len-65) + 65);
          
        if(Math.random() > 0.5)
        {
          start += 32;
        }
      
        let missing = String.fromCharCode(start + missingIdx);
        let array = [];
        
        for(let i=0;i<len;i++)
        {
          if(i != missingIdx)
          {
            array.push(String.fromCharCode(start + i));
          }
        }
          
        console.log("Array: " + array.join(','));
          
        Test.assertEquals(findMissingLetter(array), missing);
      }        
    });  
  }); */