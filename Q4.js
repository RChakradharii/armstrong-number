const input = require("readline-sync")

/* (4) Write a program to check whether a number is palindrome or not.*/


let a=input.question("enter the number: ");

let i=0;
let  sum=0, n=a;
while(a>0)
{
    p = a%10;
    sum=(sum * 10)+p;
    a=Math.floor(a/10);

    i=+1
}

a = n;
if(sum==a)
{
    console.log("palindrome number");
}else 
{
    console.log("not palindrome")
}
