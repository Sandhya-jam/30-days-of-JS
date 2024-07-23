//ACTIVITY-1:Function Declaration
//Task-1:function to check even/odd
function evenOrOdd(num)
{
    if(num%2==0) return "even"
    else return "odd"
}
console.log(evenOrOdd(4)); //even
console.log(evenOrOdd(45)); //odd

//Task-2:function to calculate square
function square(n)
{
    return n*n;
}
console.log(`Square of 5 is ${square(5)}`);  //25
console.log(`Square of 10 is ${square(10)}`);  //100

//ACTIVITY-2:Function Expression
//Task-3:function to find max number
const maximum = function(a,b)
{
    if(a>b) return a;
    else return b;
}
console.log(`The Maximum number is ${maximum(26,7)}`)  //26
console.log(`The Maximum number is ${maximum(18,24)}`) //24

//Task-4:function to concatenate two strings
const concatenateStrings = function(s1,s2)
{
    return s1.concat(s2);  //can also do s1+s2
}
console.log(concatenateStrings("OCD"," Society"))      //OCD Society
console.log(concatenateStrings("Self"," Confidence")) //Self Confidence

//ACTIVITY-3:Arrow Functions
//Task-5:arrow fun to calculate sum of 2 numbers
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(23,7))  //30
console.log(sum(10,3))  //13

//Task-6:check for a specific character in string
const CheckinString=(t1,t2)=>
{
    for(let i=0;i<t1.length;i++)
    {
        if(t1[i]==t2) return true;    //we can use inbuilt-function also
    }

    return false;
}
console.log(CheckinString("JavaScript",'S'))  //true
console.log(CheckinString("Coding",'c'))  //false:uppercase and lowercase not considered same
console.log(CheckinString("Computer",'a'))  //false

//ACTIVITY-4:Function Parameters and Default Values
//Task-7:Product of numbers
function Product(x,y=1)
{
    return x*y;
}
console.log(Product(3,5)) //15
console.log(Product(12))  //12:second parameter is 1 which default

//Task-8:Greetings to a person
function Greetings(name,age=20)
{
    return `Hello ${name}!.Your age is ${age}`;
}
console.log(Greetings("Blessy",16))  //Hello Blessy!.Your age is 16
console.log(Greetings("Lilly"))      //Hello Lilly!.Your age is 20

//ACTIVITY-5:Higher-Order Functions
//Task-9:
function repeatFun(fn,numTimes)
{
    for(let i=0;i<numTimes;i++)
    fn()
}

function hey()
{
    console.log("hey! how are you?!")
}
repeatFun(hey,5) //prints hey! how are you?! 5 times

//Task-10:
function combine(fn1,fn2,value)
{
    let result=fn1(value)
    return fn2(result)
}

function Multiply(m)
{
    return 2*m 
}

function Cube(n)
{
    return n*n*n
}

console.log(combine(Cube,Multiply,5)) //250 fn1:125 fn2:125*2=250
console.log(combine(Cube,Multiply,2)) //16
