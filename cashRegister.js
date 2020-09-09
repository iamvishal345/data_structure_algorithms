function checkCashRegister(price, cash, cid) {
  const UNIT_AMOUNT = [
    { name: "ONE HUNDRED", val: 100 },
    { name: "TWENTY", val: 20 },
    { name: "TEN", val: 10 },
    { name: "FIVE", val: 5 },
    { name: "ONE", val: 1 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
  ];
  let cidArr = cid.map((change) => [change[0], Math.round(change[1] * 100)]);
  let priceRound = Math.round(price * 100);
  let cashRound = Math.round(cash * 100);
  let change = cashRound - priceRound;
  let output = { status: "", change: [] };
  let total = cidArr.reduce((acc, curr) => acc + curr[1], 0);
  console.log(total, change, cidArr);
  if (total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  } else if (total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
    return output;
  } else {
    let changeArr = [];
    for (let i = 0; i < UNIT_AMOUNT.length; i++) {
      let currValue = 0;
      while (change >= UNIT_AMOUNT[i].val && currValue < cidArr[8 - i][1]) {
        change -= UNIT_AMOUNT[i].val;
        currValue += UNIT_AMOUNT[i].val;
      }
      if (currValue > 0) {
        changeArr.push([UNIT_AMOUNT[i].name, currValue / 100]);
      }
    }
    console.log(change);
    if (change === 0) {
      output.status = "OPEN";
      output.change = changeArr;
      return output;
    } else {
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
      return output;
    }
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
