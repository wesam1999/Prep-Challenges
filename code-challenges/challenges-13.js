'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//

// ------------------------

const objectCounter = (obj) => {
   const objectCounter= obj.reduce((previousValue, currentValue)=>{
return previousValue+1;



    },0);
    return objectCounter;


    // write your code here

}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

function stringReverse(str){
  
    return str.split(" ").reduce((rev, char)=> char + " "+rev, ''); 
  
  }

// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
    let returnV = {};
    let a=0;
    let b=0;
    let c=0;
    const objectCounter= obj.reduce((previousValue, currentValue)=>{
        let result1 = Object.values(currentValue);
        // console.log(currentValue);
 if(result1[1]==='Jade')
       {
        b+=1;
        previousValue+1;
        let Jade=result1[1];
        returnV.Jade=b;

       }
     if(result1[1]==='James'){  
      a+=1;
       let James=result1[1];
      previousValue+1;
        returnV.James=a;
     }
       
        if(result1[1]==='Bailey'){
      c+=1;
      previousValue+1;
        let Bailey=result1[1];
      returnV.Bailey=c;
       }
           
  
       
    },0);
return returnV;
    
}



module.exports = { objectCounter, stringReverse, statistics };

