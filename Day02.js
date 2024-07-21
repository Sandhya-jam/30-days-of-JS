//ACTIVITY-1:Airthmetic operations
//Task-1
let a=23
let b=18
console.log(a+b)//41

//Task-2
let c=12
let d=7
console.log(c-d)//5

// Task-3
let e=6
let f=9
console.log(e*f) //54

//Task-4
let g=80
let h=10
console.log(g/h) //8

//Task-5
let i=100
let j=10
console.log(i%j) //0

//ACTIVITY-2:Assignment operation
//Task-6
let k=7
k+=3
console.log(k) //10

//Task-7
let l=10
l-=4
console.log(l) //6

//ACTIVITY-3:Comparision Operation
//Task-8
console.log(18<26)//true
console.log(26<18)//false

//Task-9
console.log(5>=5)//true
console.log(7>=10)//false

//Task-10
let m="24"
let n=24
console.log(m==n)//true
console.log(m===n)//false

//ACTIVITY-4:Logical Opeartion
//Task-11
let p=24;
if(p>0 && p%2==0)
    console.log("Positive and even number")
else
  console.log("Odd Number or negative number") //Positive and even number

//Task-12
let ch='k'
if(ch>='a' && ch<='z' || ch>='A' && ch<='Z') //Alphabet
    console.log("Alphabet")
else
    console.log("Not an alphabet")

//Task-13
let r=-12;
if(!(r>0))
    console.log("Negative number") //Negative number

//ACTIVITY-5:Ternary Operator
let age=25;
console.log(age>=18 ? "Right to vote":"Not eligible to vote"); //Right to vote
