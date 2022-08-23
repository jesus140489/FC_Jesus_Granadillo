function rot13(str) 
{
  let str2="";
  for (let i=0;i<str.length;i++)
  {
    if(str[i].charCodeAt(0) >= 78 && str[i].charCodeAt(0) <= 90)
    {
      let num = str[i].charCodeAt(0)-13;
      console.log(num);
      str2+= String.fromCharCode(num);
    }
    else if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 77)
    {
      let num = str[i].charCodeAt(0)+13;
      console.log(num);
      str2+= String.fromCharCode(num);
    }
    else
    {
      str2+=str[i];
    }
  }
  console.log(str2);
  return str2;
}

rot13("SERR PBQR PNZC");