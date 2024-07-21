//ACTIVITY-1:If-else statement
//Task1:check whether +ve/-ve/zero
let num=45
if(num>0)
    console.log("Positive Number")
else if(num<0)
    console.log("Negative Number")
else
    console.log("Zero")

//Task-2:Check is eligible for vote
let age=29
if(age>=18)
    console.log("The person is eligible for voting")
else
   console.log("The Person is not eligible for voting")

//ACTIVITY-2:Nested if else statements
//Task-3:Finding largest number
let a=2,b=8,c=16
if(a>=b)
{
    if(a>=c)
        console.log(a)
    else
       console.log(c)
}
else
{
    if(b>=c)
        console.log(b)
    else
       console.log(c)
}

//ACTIVITY-3:Switch Case
//Task-4:Determine day of week
let day=3
switch(day)
{
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
         console.log("Wednesday")
         break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
         console.log("Saturday")
         break;
     case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day")
}

//Task-5:Assigning grade
let grade=70
switch(true)
{
    case (grade>=85 && grade<=100):
       console.log("Grade A")
       break;
    case (grade>=70 && grade<85):
        console.log("Grade B")
        break;
    case (grade>=55 && grade<70):
        console.log("Grade C")
        break;
    case (grade>=40 && grade<55):
        console.log("Grade D")
        break;
    case (grade>=0 && grade<40):
        console.log("Grade F")
        break;
    default:
        console.log("Invalid grade")
}

//ACTIVITY-4:Ternary Operator
//Task-6:Check even/odd
let x=45
x%2==0 ? console.log("Even"):console.log("Odd")

//ACTIVITY-5:Combining Conditions
//Task-7:Check leap year
let year=2024
if(year%4===0 && year%100!==0 || year%400==0)
    console.log("Leap Year")
else
   console.log("Not A Leap Year")