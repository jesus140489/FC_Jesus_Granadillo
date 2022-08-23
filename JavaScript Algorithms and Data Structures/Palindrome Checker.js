function palindrome(str) {
  let str2="";
  let str3="";
  let result = false;
  for (let i = str.length-1; i>=0 ; i--)
  {
    if ((str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) | (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) | (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122))
    {
    str2 += str[i].toLowerCase();
    }
  }
  for (let i = 0; i<str.length ; i++)
  {
    if ((str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) | (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) | (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122))
    {
    str3 += str[i].toLowerCase();
    }
  }
  if (str2 === str3)
  {
    result = true;
  }
  console.log(str2);
  console.log(str3);
  return result;
}

palindrome("A man, a plan, a canal. Panama");