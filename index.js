const { createStubInstance } = require("sinon/lib/sinon/stub");

// Write your solution in this file!
var customerName = 'bob';
function name() {
}
customerName();

function upperCaseCustomerName() {
     customerName = customerName.toUpperCase();
     return customerName;
}


function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

//let leastFavoriteCustomer = 'Rick'
//function changeLeastFavoriteCustomer() {
//    leastFavoriteCustomer = 'Kyle';
//}

const leastFavoriteCustomer = "d";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "f";
}