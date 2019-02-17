function checkCashRegister(price, cash, cid) {
    //this basic version works to supply change, but ignores what's actually in the drawer (cid)
    let amountDue = cash - price;
  
    const values =   [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], 
                     ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], 
                     ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

    let possible = values.filter(x => x[1] <= amountDue);
    
    let change = [];
    
        for (let i = possible.length-1; i >= 0 || amountDue != 0; i--) {
            change.unshift([possible[i][0], Math.floor(amountDue/possible[i][1])*possible[i][1]]);
            amountDue = amountDue%possible[i][1];
        }
    
  
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(15.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));