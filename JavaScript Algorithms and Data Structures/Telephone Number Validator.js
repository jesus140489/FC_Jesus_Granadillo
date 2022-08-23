function telephoneCheck(str) {
  let flag = false;
  let num = "";
  let gui = "";
  let cGui = 0;
  let par = "";
  let cPar = 0;
  loop1:
  for (let i=0;i<str.length;i++)
  {
    if (str[i]===" " | str[i]==="(" | str[i]===")" | str[i]==="-" | (str[i] >= "0" && str[i] <= "9"))
    {
      if(str[i]==="(" | str[i]===")" | (str[i] >= "0" && str[i] <= "9"))
      {
          par+= str[i];
          if (str[i]==="(" | str[i]===")")
          {
          cPar+=1;
          }
      }
      if(str[i]==="-" | (str[i] >= "0" && str[i] <= "9"))
      {
          gui+= str[i];
          if (str[i]==="-")
          {
          cGui+=1;
          }
      }
      if(str[i] >= "0" && str[i] <= "9")
      {
        num+= str[i];
      }
      if (i===str.length-1)
      {
        if (cPar === 2)
        {
  loop2:
          for (let j=0;j<par.length;j++)
          {
            if(par[j]==="(")
            {
              if (j != 0 && j!= 1)
              {
                flag=false;
                break loop1;
              }
            }
            else if (par[j]===")")
            {
              if (j != 4 && j!= 5)
              {
                flag=false;
                break loop1;
              }
            }
          }
        }
        else if (cPar === 1 | cPar > 2)
        {
          flag=false;
          break loop1;
        }
        if (cGui>=1 && cGui<=2)
        {
  loop3:
          for (let k=0;k<gui.length;k++)
          {
            if(gui[k]==="-")
            {
              if (k != 3 && k!= 4 && k!=6 && k!=7 && k!=8)
              {
                console.log("aqui");
                flag=false;
                break loop1;
              }
            }
          }
        }
        else if (cGui>2)
        {
          flag=false;
          break loop1;
        }
        if (num.length >= 10 && num.length <= 11)
        {
          if (num.length === 11 && num[0]!="1")
          {
            flag=false;
            break loop1;
          }
          else if (num.length === 11 && num[0]==="1")
          {
            flag=true;
          }
          else if (num.length === 10)
          {
            flag=true;
          }
          }
          else
          {
            flag=false;
            break loop1;
          }
      }
    }
    else
    {
      flag=false;
      break loop1;
    }
  }
  console.log(gui);
  console.log(par);
  console.log(num);
  console.log(flag);
  return flag;
}

telephoneCheck("1 555-555-5555");
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