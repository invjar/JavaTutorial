
// Code challenge 3 ... Tip calculator

console.log('Tip calculator');

var restBill;
var tipMultiplier = [0.2, 0.15, 0.1];
var tipAmt;

console.log(tipMultiplier);

restBill = prompt('Enter the restaurant bill amount');
tipAmt = [ tipMultiplier[0]*restBill, tipMultiplier[1]*restBill, tipMultiplier[2]*restBill ];

console.log(tipAmt);

switch(true) {

    case (restBill > 0 && restBill <= 50):
        console.log('Tip options ' + tipAmt);
        console.log('Actual tip paid ' + tipAmt[0]);
    
    case (restBill > 50 && restBill <= 200):
        console.log('Tip options ' + tipAmt);
        console.log('Actual tip paid ' + tipAmt[1]);
        break;

    case (restBill > 200):
        console.log('Tip options ' + tipAmt);
        console.log('Actual tip paid ' + tipAmt[2]);

    default:
        console.log('Strange exception');
}
