///////////////////////////////////////////////MY VERSION//////////////////////////////////////////////////////////

// function randomNumber() {
//     let amountFrom = prompt('Range from random number: (from)');
//     let amountTo = prompt('Range to random number: (to)');
//     let from = parseInt(amountFrom);
//     console.log('From: ' + from);
//     let to = parseInt(amountTo);
//     console.log('To: ' + to);
//     if (isNaN(from)) alert('There is no numbers!');
//     if (isNaN(to)) alert('There is no numbers!');
//     // console.log('the range is from |' + from + '| to |' + to + '|');
//     let number = Math.ceil(Math.random() * (from - to) + to);
//     // console.log(number);
//
//     return number;
// }
//
// console.log('Your random number was expected from custom range!  ' + randomNumber());

// console.log('random number is:  ' + );


////////////////////////////////////////////////////MY VERSION/////////////////////////////////////////////////////

////////////////////////////////////////////////////Teacher/////////////////////////////////////////////////////

// function easyRandom() {
//     let number = Math.ceil(Math.random() * 100);
//     console.log(number);
//     return number;
// }
//
// easyRandom();
//
//
// function notEasyRandom(from, to) {
//     let number = Math.floor(Math.random() * (to - from + 1) + from);
//     console.log(number);
//     return number;
// }
//
// notEasyRandom(10, 102);

////////////////////////////////////////////////////Teacher/////////////////////////////////////////////////////


// function tempConverter(deg, from, to) {
//     if (from == 'C') {
//         if (to == 'F') {
//             return deg * 1.8 + 32;
//         } else { //to = 'K'
//             return deg + 273;
//         }
//     }
//     if (from == 'K') {
//         if (to == 'F') {
//             return (deg - 273) * 1.8 + 32
//         } else { //to = C
//             return deg - 273;
//         }
//     }
//     if (from == 'F') {
//         if (to == 'C') ;
//         return (deg - 32) / 1.8;
//     }
// }
//
// console.log(tempConverter(90, 'C', 'F'));


// function isSquare(a) {
//     let square = a * a;
//     if (square == a * a) {
//         console.log('good');
//     } else {
//         console.log('BAD');
//     }
//     // console.log('Square: |');
//     return square;
// }
//
// console.log(isSquare(5));
// console.log(isSquare(25));
// console.log(isSquare(36));


// function isSquare(a) {
// //     if (Math.sqrt(a) == parseInt(Math.sqrt(a))) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// //
// // }
// //
// // console.log(isSquare(5));
// // console.log(isSquare(25));
// // console.log(isSquare(36));


// function string() {
//     let string = 'Lorem ipsum dolor sit amet';
//     let splits = string.split(" ");
//     let result = "";
//
//     for (let i = 0; i < splits.length; i++) {
//         let name = splits[i];
//         let first = name.substring(0, 1).toUpperCase();
//         let Leftovers = name.substring(1, name.length);
//         result += first + Leftovers + " ";
//     }
//
//     console.log(result)
// }
//
// string();


// function mayCapitalize(string) {
//     let str = 'lorem ipsum dolor sit amet';
//     for (let i = 0; i < str.length; i++) {
//
//     }
//     console.log(aaa);
//     return str;
// }
//
// console.log(mayCapitalize());


// let testString = 'lorem ipsum dolor sit amet';

// console.log(testString.length);

// console.log(testString.charAt(1));

// console.log(testString.toUpperCase());

// console.log(testString.substring(3, 8));

// console.log(testString.substr(3, 6));

// console.log(testString.substring(3, -3));

// console.log(testString.slice(3, -3));

// console.log(testString.slice(0, 2) + 'Q' + testString.slice(3));


function makeCapitalize(str) {
    debugger;


    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            str = str.slice(0, i + 1) + str.charAt(i + 1).toUpperCase() + str.slice(i + 2);
        }
    }
    return str
}

makeCapitalize('Lorem ipsum dolor sit amet');