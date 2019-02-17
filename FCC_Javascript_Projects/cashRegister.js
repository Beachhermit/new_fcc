function checkCashRegister(price, cash, cid) {
    
    function compareChangeDraw(change, cashInCents) {
        for (let denomination in change) {
            if (change[denomination][1] != cashInCents[denomination]) {
                return false;
            }
        }
        return true;
    }
    
    let amountDue = Math.round((cash - price) * 100);
  
    const values =   [["PENNY", 1], ["NICKEL", 5], ["DIME", 10], 
                     ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], 
                     ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]];
                     
    const cashInCents = cid.map(x => Math.round(x[1]*100));
    //console.log("cashInCents: " + cashInCents);
    
    let change = [];
    let iStart = values.length-1;

    for (let i = iStart; i >= 0 ; i--) {
        if (Math.floor(amountDue/values[i][1]) * values[i][1] <= cashInCents[i]) {
            change.unshift([values[i][0], Math.floor(amountDue/values[i][1])*values[i][1]]);
            amountDue = amountDue%values[i][1];
            cashInCents[i] -= Math.floor(amountDue/values[i][1])*values[i][1];
        }
        else {
            if (cashInCents[i] > 0) {
                change.unshift([values[i][0], cashInCents[i]]);
                amountDue -= cashInCents[i];
                cashInCents[i] = 0;
            }
        }
    }
    
    if (amountDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    if (compareChangeDraw(change, cashInCents)) {
        return {status: "CLOSED", change: [...cid]};
    }
    else {
        change = change.map(x => [x[0], (x[1]/100)]).filter(x => x[1] > 0).reverse();
        return {status: "OPEN", change: [...change]};
    }
    
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

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));