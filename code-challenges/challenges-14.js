'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
   
let a=str.split(" ").splice(-1);
    // write your code here
return a[0];

}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {

    let n = str.split(" ");
    return n[n.length - 1];



    // write your code here
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    
        
  let n = str.split(" ");
  
 
  let her=n.indexOf("I")
  if(her!=-1){
   n.splice(her,1, 'We');
   
  }
    let b=n.indexOf('am')
    if(b!=-1){
     n.splice(b,1 , 'are');}
     let c=n.indexOf('was')
     if(c!=-1){
        n.splice(c,1 , 'were'); 
     }


let a=  n.join(' ');

return a;


    
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
  arr.splice( arr.indexOf(arr[4]) ,1,arr[4].concat(","));
  let a=  arr.join(' ');

     return a ;
         
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
   
      let arr = str.split("")
  
  
    let a=  arr.reduce((p,c,i)=> {
      if(c in p){
        p[c]+1
        p[c]++
      } else{
        p[c]=1
      }
      return p;
  
    },[]);
    
  return a
  // let b=  a.toString();
  // let join= a.join(' ')
    
  
    // return join ;
  
  }


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };