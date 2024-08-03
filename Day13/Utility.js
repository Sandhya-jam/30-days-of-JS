//Task-1:
export function Add(a,b)
{
    return a+b;
}

//Task-2:
export const person={
    name:'Komala',
    age:18,
    greetings()
    {
        console.log(`Hello ${this.name},Your age is ${this.age}`);
    }
}

//Task-3:
export function multiply(a,b)
{
    return a*b;
}

export function substract(a,b)
{
    return a-b;
}

export function string(str)
{
    return str;
}

function Voting(age)
{
    if(age>=18)
    console.log("Eligible for Voting");
    else
    console.log("Not eligible for Voting");
}
export default Voting;