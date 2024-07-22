//ACTIVITY-1:For Loop
//Task-1:print numbers from 1 to 10
for(let i=1;i<=10;i++)
{
    console.log(i); //1 2 3 4 5 6 7 8 9 10
}

//Task-2:Peint Table 5
let table=5;
for(let j=1;j<=10;j++)
{
    console.log(table*j); //5 10 15 20 25 30 35 40 45 50
}

//ACTIVITY-2:While Loop
//Task-3:sum of numbers
let i=1,sum=0;
while(i<=10)
{
    sum+=i;
    i++;
}
console.log("The Sum of",i-1,"numbers is",sum); //55

//Task-4:print from 10 to 1
let j=10;
while(j>0)
{
    console.log(j); //10 9 8 7 6 5 4 3 2 1
    j--;
}

//ACTIVITY-3:Do While Loop
//Task-5:print 1 to 5
let k=1;
do{
    console.log(k); //1 2 3 4 5
    k++;
}while(k<=5);

//Task-6:factorial of a number
let num=1,fact=1;
do{
    fact*=num;
    num++;
}while(num<=5)
console.log("The factorial of",num-1,fact) //120

//ACTIVITY-4:Nested Loops
//Task-7:Printing Pattern
let Pattern=""
for(let m=1;m<=5;m++)
{
    for(let n=1;n<=m;n++)     
    {                         
        Pattern+="*"+" ";      
    }                          
    Pattern+='\n';             
}
console.log(Pattern);

//ACTIVITY-5:Loop Control Statements
//Task-8:Print 1-10 and skip 5
for(let k=1;k<=10;k++)
{
    if(k==5) continue;
    console.log(k); //1 2 3 4 6 7 8 9 10
}

//Task-9:Print 1-10 stop when number is 7
for(let x=1;x<=10;x++)
{
    if(x==7) break;
    console.log(x); //1 2 3 4 5 6
}