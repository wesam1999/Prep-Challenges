'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    let result=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]% 2==0){


        }
           else
          {
            result.push(arr[i]);
          }

    }
    return result;
    // write your code here
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    let returnV = [];
    for(let i=0;i<arr.length;i++){
    const result1 = Object.values(arr[i]);
     if(result1[1]===null&&result1[2]>4){  
    
     }
       else if(result1[2]>4)
       {let fullNameV =result1[0]+" "+result1[1];

       returnV.push({fullName:fullNameV,tech:result1[3]});

       }
  
       
}
return returnV;
    // write your code here
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
let result=[];
let vowels=['a', 'e', 'i', 'o', 'u'];
    for(let i=0;i<arr.length;i++){
       if(arr[i].includes(vowels)){}

result.push(arr[i]);
     





    }
return result;
    // write your code here
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    let arr3=[];
    let arr4=[];
    for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
               if((arr1[i].includes(arr2[j]))){
                console.log(arr2[j]); 
                arr3.push(arr2[j]);

               }
     
    }
    for(let a=0;a<arr3.length;a++){
if(arr1[i].includes(arr3[a])){
    console.log(arr1[i]);
arr4.push(arr1[i]);

}``
    }
    }
    return arr4 ;
    // write your code here
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

