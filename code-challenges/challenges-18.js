'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    var splitString = str.split(" ");
    let spl=Math.floor((splitString.length)/2);
      
     let stringL= splitString[spl].length;
     
      return stringL;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    var splitString1 = str1.split("");
   var splitString2 = str2.split("");
     let n1 = splitString1.length;
         let n2 = splitString2.length;
    
         // If length of both strings is not same,
         // then they cannot be anagram
         if (n1 != n2){
             return false;
         }
         // Sort both strings
         splitString1.sort();
         splitString2.sort();
    
         // Compare sorted strings
         for (let i = 0; i < n1; i++){
             if (splitString1[i] != splitString2[i])
                 return false;
         }
      
         return true;
      
      }
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };