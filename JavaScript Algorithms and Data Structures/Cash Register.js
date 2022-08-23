function checkCashRegister(price, cash, cid) {
let money={
  "PENNY":{cash:0,value: 0.01,change:0},
  "NICKEL":{cash:0,value: 0.05,change:0},
  "DIME":{cash:0,value: 0.1,change:0},
  "QUARTER":{cash:0,value: 0.25,change:0},
  "ONE":{cash:0,value: 1,change:0},
  "FIVE":{cash:0,value: 5,change:0},
  "TEN":{cash:0,value: 10,change:0},
  "TWENTY":{cash:0,value: 20,change:0},
  "ONE HUNDRED":{cash:0,value: 100,change:0}
};
let response = {
    status: "",
    change: []
};
  let total = 0;
  let change2 = cash-price;
  for (let i=0;i<cid.length;i++)
  {
    total+=cid[i][1];
    money[cid[i][0]].cash+=cid[i][1];
  }
  if (total > change2)
  {
    while (change2>0)
    {
      if (change2 >= 100 && money["ONE HUNDRED"].cash >= 100)
      {
        response.status="OPEN";
        money["ONE HUNDRED"].change+=100;
        money["ONE HUNDRED"].cash-=100;
        change2-=100;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2 >= 20 && money["TWENTY"].cash >= 20)
      {
        response.status="OPEN";
        money["TWENTY"].change+=20;
        money["TWENTY"].cash-=20;
        change2-=20;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2 >= 10 && money["TEN"].cash >= 10)
      {
        response.status="OPEN";
        money["TEN"].change+=10;
        money["TEN"].cash-=10;
        change2-=10;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2 >= 5 && money["FIVE"].cash >= 5)
      {
        response.status="OPEN";
        money["FIVE"].change+=5;
        money["FIVE"].cash-=5;
        change2-=5;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2 >= 1 && money["ONE"].cash >= 1)
      {
        response.status="OPEN";
        money["ONE"].change+=1;
        money["ONE"].cash-=1;
        change2-=1;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2 >= 0.25 && money["QUARTER"].cash >= 0.25)
      {
        response.status="OPEN";
        money["QUARTER"].change+=0.25;
        money["QUARTER"].cash-=0.25;
        change2-=0.25;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2 >= 0.1 && money["DIME"].cash >= 0.1)
      {
        response.status="OPEN";
        money["DIME"].change+=0.1;
        money["DIME"].cash-=0.1;
        change2-=0.1;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2 >= 0.05 && money["NICKEL"].cash >= 0.5)
      {
        response.status="OPEN";
        money["NICKEL"].change+=0.5;
        money["NICKEL"].cash-=0.5;
        change2-=0.5;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2 >= 0.01 && money["PENNY"].cash >= 0.01)
      {
        response.status="OPEN";
        money["PENNY"].change+=0.01;
        money["PENNY"].cash-=0.01;
        change2-=0.01;
        change2 = Math.round((change2 + Number.EPSILON) * 100) / 100;
      }
      else if (change2>0)
      {
        console.log("aqui");
        response.status="INSUFFICIENT_FUNDS";
        response.change=[];
      }
      if (change2===0)
      {
        if (money["ONE HUNDRED"].change != 0)
        {
          response.change.push(["ONE HUNDRED", money["ONE HUNDRED"].change]);
        }  
        if (money["TWENTY"].change != 0)
        {
          response.change.push(["TWENTY", money["TWENTY"].change]);
        }  
        if (money["TEN"].change != 0)
        {
          response.change.push(["TEN", money["TEN"].change]);
        }  
        if (money["FIVE"].change != 0)
        {
          response.change.push(["FIVE", money["FIVE"].change]);
        }  
        if (money["ONE"].change != 0)
        {
          response.change.push(["ONE", money["ONE"].change]);
        }  
        if (money["QUARTER"].change != 0)
        {
          response.change.push(["QUARTER", money["QUARTER"].change]);
        }  
        if (money["DIME"].change != 0)
        {
          response.change.push(["DIME", money["DIME"].change]);
        }  
        if (money["NICKEL"].change != 0)
        {
          response.change.push(["NICKEL", money["NICKEL"].change]);
        }  
        if (money["PENNY"].change != 0)
        {
          response.change.push(["PENNY", money["PENNY"].change]);
        }  
      }
    }
  }
  else if (total === change2)
  {
        response.status="CLOSED";
        response.change.push(["PENNY", money["PENNY"].cash]);
        response.change.push(["NICKEL", money["NICKEL"].cash]);
        response.change.push(["DIME", money["DIME"].cash]);
        response.change.push(["QUARTER", money["QUARTER"].cash]);
        response.change.push(["ONE", money["ONE"].cash]);
        response.change.push(["FIVE", money["FIVE"].cash]);
        response.change.push(["TEN", money["TEN"].cash]);
        response.change.push(["TWENTY", money["TWENTY"].cash]);
        response.change.push(["ONE HUNDRED", money["ONE HUNDRED"].cash]);
  }
  else if (total < change2)
  {
    response.status="INSUFFICIENT_FUNDS";
    response.change=[];
  }
  console.log(response);
  return response;
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);