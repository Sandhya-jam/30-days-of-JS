//ACTIVITY-1:Template Literals
//Task-1:create string
let name="Sandhya Rani"
let age=18
let greeting=`Hello! ${name}.You are ${age} years Old`
console.log(greeting)   //Hello! Sandhya Rani.You are 18 years Old

//Task-2:Create Multi-line string
let str=`This is a
multi-line 
string`
console.log(str)
/*This is a
multi-line 
string*/

//ACTIVITY-2:Destructuring
//Task-3:Array Destructuring
let arr=[2,4,5,6,7];
const [first,second]=arr
console.log(first)    //2
console.log(second)   //6

//Task-4:Object Destructuring
const Book={
    Title:"Harry Potter",
    Author:"J.k Rowling"
}
const {Title,Author}=Book
console.log(Title)   //Harry Potter
console.log(Author)  //J.k Rowling

//ACTIVITY-3:Spread And Rest Operators
//Task-5:Create new Array
let A=[1,2,3,4,5]
let a=6,b=7
const newArray=[...A,a,b]
console.log(newArray)   //[1,2,3,4,5,6,7]

//Task-6:Sum of elements using spread operator
function SumElements(...args)
{
    let sum=0
    for(let arg of args)
      sum+=arg

    return sum
} 
console.log(SumElements(1,2,3,4,5))  //15
console.log(SumElements(4,6,1,3))    //14

//ACTIVITY-4:Default Parameters
//Task-7:Product of 2 numbers
function ProductOfTwo(a,b=1)
{
    return a*b
}
console.log(ProductOfTwo(12,6))  //72
console.log(ProductOfTwo(4))     //4

//Activity-5:Enhanced Object Literals
//Task-8:create using methods and properties
//using properties
const FullName='komala Sathiri'
const Age=18
const person={
   FullName, //same as Fullname:Fullname
   Age
}
console.log(person)   //{ FullName: 'komala Sathiri', Age: 18 }

//using methods
const student={
    name:"Ashwitha",
    Grade:'A',
    YourGrade(){  //same as YourGrade:function()
        console.log(`hello ${this.name},You got ${this.Grade} grade`)
    }
};

student.YourGrade()   //hello Ashwitha,You got A grade
console.log(student)  //{ name: 'Ashwitha', Grade: 'A', YourGrade: [Function: YourGrade] }

//Task-9:using Computed Properties
const PropName1='Title'
const PropName2="Author"

const BookOne={
    [PropName1]:'The Wings Of fire',
    [PropName2]:'Dr.A P J Abdul Kalam'
}
console.log(BookOne)  //{ Title: 'The Wings Of fire', Author: 'Dr.A P J Abdul Kalam' }
