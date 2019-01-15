///////////////////////////////////////////////MY VERSION//////////////////////////////////////////////////////////

function randomNumber() {
    let amountFrom = prompt('Range from random number: (from)');
    let amountTo = prompt('Range to random number: (to)');
    let from = parseInt(amountFrom);
    console.log('From: ' + from);
    let to = parseInt(amountTo);
    console.log('To: ' + to);
    if (isNaN(from && to)) alert('There is no numbers!');
    // console.log('the range is from |' + from + '| to |' + to + '|');
    let number = Math.ceil(Math.random() * (from - to) + to);
    // console.log(number);

    return number;

}

console.log('Your random number was expected from custom range!  ' + randomNumber());

// console.log('random number is:  ' + );


////////////////////////////////////////////////////MY VERSION/////////////////////////////////////////////////////

////////////////////////////////////////////////////Teacher version/////////////////////////////////////////////////////
function easyRandom() {
    let number = Math.ceil(Math.random() * 100);
    console.log(number)
    return number;
}

easyRandom();
////////////////////////////////////////////////////Teacher version/////////////////////////////////////////////////////

