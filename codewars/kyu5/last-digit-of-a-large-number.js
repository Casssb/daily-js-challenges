var lastDigit = function(str1, str2) {
    if (str2 === '0') return 1;
    str1 = BigInt(str1) % 10n;
    str2 = BigInt(str2);
    const exp = Number(str2 % 4n);
    return (Number(str1) ** (exp === 0 ? 4 : exp)) % 10;
  };


//   describe("lastDigit", function(){
//     var randomString = function(){
//       var i = Math.floor(Math.random() * 100) + 1, str="";
//       while(i --> 0){
//         str = str + "01234567890".charAt(Math.floor(Math.random()*10));
//       }
//       return str;
//     };
//     it("should work for some examples", function(){
//       Test.assertEquals(lastDigit("4", "1"), 4);
//       Test.assertEquals(lastDigit("4", "2"), 6);
//       Test.assertEquals(lastDigit("9", "7"), 9);
//       Test.assertEquals(lastDigit("10","10000000000"), 0);
//       Test.assertEquals(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
//       Test.assertEquals(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);
//     });
//     it("should work for x ^ 0", function(){
//       var i, r;
//       for(i = 0; i < 100; ++i){
//         r = lastDigit(randomString(), "0");
//         if(i < 1 || r !== 1){
//           Test.assertEquals(r, 1, "x ^ 0 has 1 as last digit");
//           if(r !== 1)
//             return;
//         }
//       }
//     });
//     it("should work for random strings", function(){
//       var solution = function(str1, str2){
//         if(str2 === "0") return 1;
//         var a = +(str1[str1.length - 1]);
//         var b = +str2.substr(-2);
//         var e = (((b + 3) % 4) + 1), p = 1;
//         while(e --> 0) p *= a;
//         return p % 10;
//       }
//       var i, r, a, b, actual;
//       for(i = 0; i < 100; ++i){
//         a = randomString();
//         b = randomString();
//         r = solution(a,b);
//         actual = lastDigit(a,b);
//         if(i === 0){
//           // show and test at least one test
//           Test.assertEquals(actual, r, a + "^" + b + " has " + r + " as last digit!");
//         }
//         if(actual !== r){
//           Test.assertEquals(actual, r);
//           break;
//         }    
//       }
//     });
//   });
  