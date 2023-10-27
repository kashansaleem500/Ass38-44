//! ----------Assignment FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS----------

//? Ques 1

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//       result *= a;
//     }
//     return result;
//   }
  
  
// document.write(power(2, 3) , '<br>'); 
// document.write(power(5, 2)); 

//? Ques 2

// function leap(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }


// const year = prompt('Enter Any Year')
// if (leap(year)) {
//   document.write(year + " is a leap year.");
// } else {
//   document.write(year + " is not a leap year.");
// }

//? Ques 3

// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }
// function calTriArea(a, b, c) {
//   const S = calculateS(a, b, c);
//   const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }

// const sideA = 5;
// const sideB = 6;
// const sideC = 7;

// const triArea = calTriArea(sideA, sideB, sideC);
// document.write("The area of the triangle is: " + triArea);


//? Ques 4


// function calAve(mark1, mark2, mark3) {
//   return (mark1 + mark2 + mark3) / 3;
// }

// function calPer(mark1, mark2, mark3, totalMarks = 300) {
//   const totalObtainedMarks = mark1 + mark2 + mark3;
//   return (totalObtainedMarks / totalMarks) * 100;
// }

// function main() {
//   const mark1 = +(prompt("Enter marks for subject 1:"));
//   const mark2 = +(prompt("Enter marks for subject 2:"));
//   const mark3 = +(prompt("Enter marks for subject 3:"));

//   const average = calAve(mark1, mark2, mark3);
//   const percentage = calPer(mark1, mark2, mark3);

// document.write('Average: ' + average + "<br>");
// document.write('Percentage: ' + percentage);
// }

// main();

//? Ques 5

// function custInd(inpStr, searchChar) {
//   for (let i = 0; i < inpStr.length; i++) {
//       if (inpStr[i] === searchChar) {
//           return i;
//       }
//   }
//   return -1;
// }

// const text = "Hello, world!";
// const charToFind = "g";
// const result = custInd(text, charToFind);

// if (result !== -1) {
//   document.write(charToFind + ' found at index' +result);
// } else {
//   document.write(charToFind + ' is not found in the string.');
// }


//? Ques 6

// function remVowels(sentence) {
//   const vowelReg = /[aeiouAEIOU]/g;
//   const result = sentence.replace(vowelReg, '');

//   return result;
// }

// const inpSent = "What Is Vowels.";
// const sentWithoutVow = remVowels(inpSent);
// document.write(sentWithoutVow);


//? Ques 7

// function countVow(text) {
//   text = text.toLowerCase(); 
//   let count = 0;

//   for (let i = 0; i < text.length - 1; i++) {
//       const currChar = text[i];
//       const nextChar = text[i + 1];

//       switch (currChar + nextChar) {
//           case 'ae':
//           case 'ai':
//           case 'ao':
//           case 'au':
//           case 'ea':
//           case 'ei':
//           case 'eo':
//           case 'eu':
//           case 'ia':
//           case 'ie':
//           case 'io':
//           case 'iu':
//           case 'oa':
//           case 'oe':
//           case 'oi':
//           case 'ou':
//           case 'ua':
//           case 'ue':
//           case 'ui':
//           case 'uo':
//               count++;
//               break;
//       }
//   }

//   return count;
// }

// const inpText = "Pleases read this application and give me gratuity";
// const result = countVow(inpText);
// document.write('Number of successive vowel pairs:' + result);

//? Ques 8


// function convertToMeters(distInKm) {
//     return distInKm * 1000;
// }

// function convertToFeet(distInKm) {
//     return distInKm * 3280.84;
// }

// function convertToInches(distInKm) {
//     return distInKm * 39370.1;
// }

// function convertToCentimeters(distInKm) {
//     return distInKm * 100000;
// }

// function printConversions(distInKm) {
//     const distanceInMeters = convertToMeters(distInKm);
//     const distanceInFeet = convertToFeet(distInKm);
//     const distanceInInches = convertToInches(distInKm);
//     const distanceInCentimeters = convertToCentimeters(distInKm);

//     document.write('Distance in Meters: ' + distanceInMeters+ ' m' ,"<br>");
//     document.write('Distance in Feet: ' + distanceInFeet + ' ft' , "<br>");
//     document.write('Distance in Inches: ' + distanceInInches + ' inches' , "<br>");
//     document.write('Distance in Centimeters: ' + distanceInCentimeters + ' cm');
// }

// const distInKm = parseFloat(prompt("Enter distance between two cities (in kilometers):"));
// printConversions(distInKm);


//? Ques 9


// function calOvertimePay(hoursWork) {
//     const regularHours = 40;
//     const hourlyRate = 12.0;
  
//     if (hoursWork <= regularHours) {
//       return 0; 
//     } else {
//       const overtimeHours = hoursWork - regularHours;
//       const overtimePay = overtimeHours * hourlyRate;
//       return overtimePay;
//     }
//   }
  
  
//   let hoursWork = 45; 
//   let overtimePay = calOvertimePay(hoursWork);
//   document.write('Overtime pay: Rs.' + overtimePay);
  
//? Ques 10

// function calcuCurrNotes(amountInHund) {
//     let amountInRupees = amountInHund * 100;
//     let notes100 = 0;
//     let notes50 = 0;
//     let notes10 = 0;
  
//     if (amountInRupees >= 100) {
//       notes100 = Math.floor(amountInRupees / 100);
//       amountInRupees %= 100;
//     }
  
//     if (amountInRupees >= 50) {
//       notes50 = Math.floor(amountInRupees / 50);
//       amountInRupees %= 50;
//     }
  
//     if (amountInRupees >= 10) {
//       notes10 = Math.floor(amountInRupees / 10);
//     }
  
//     return {
//       notes100,
//       notes50,
//       notes10,
//     };
//   }
  
//   const amountInHund = 3; 
//   const result = calcuCurrNotes(amountInHund);
//   document.write('100s: '  +result.notes100 + 'notes', "<br>");
//   document.write('50s: '  + result.notes50 + 'notes', "<br>");
//   document.write('10s: '  +result.notes10 + 'notes');
  