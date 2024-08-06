//ACTIVITY-1:UnderStanding Closures
//Task-1:
function Outer()
{
    const name="Komala";
    function Inner()
    {
        return name;
    }
    return Inner;
}
const result=Outer();
console.log(result());  //Komala

//Task-2:
function Counter()
{
    let count=0;
    return {
    increase:function()
    {
        count++;
    },
    GetValue:function(){
        return count;
    }
  };
}
const MyCounter=Counter();
MyCounter.increase();
MyCounter.increase();
MyCounter.increase();

console.log(MyCounter.GetValue()); //3

//ACTIVITY-2:Practical Closures
//Task-3:
function UniqueId()
{
    let lastId=44;
    return function()
    {
        lastId++;
        return lastId;
    }
}

const ans=UniqueId();
console.log(ans()); //45
console.log(ans()); //46
console.log(ans()); //47
console.log(ans()); //48

//Task-4:
function Person(name)
{
    return function(){
        return `Hello ${name}`
    }
}
const greet1=Person("Ashu");
console.log(greet1()); //Hello Ashu

//ACTIVITY-3:
//Task-5:
function ArrayOfFn(n)
{
    let functions=[];

    for(let i=0;i<n;i++)
    {
        functions.push(
         (function(index){
            return function(){
                console.log(index);
            }
         })(i)
        );
    }
    return functions;
}

let fns=ArrayOfFn(4);
fns.forEach(fn=>fn()); //0 1 2 3

//ACTIVITY-4:MODULE PATTERNS
//Task-6:
const ItemManager = (function() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        listItems: function() {
            console.log("Items:", items);
        }
    };
})();
ItemManager.addItem("Bottle");   //Bottle added.
ItemManager.addItem("Smart Phone");  //Smart Phone added.
ItemManager.listItems(); //Items: [ 'Bottle', 'Smart Phone' ]
ItemManager.removeItem("T Shirt");  //T Shirt not found.
ItemManager.removeItem("Bottle"); //Bottle removed.
ItemManager.listItems();   //Items: [ 'Smart Phone' ]

//ACTIVITY-5:Memoization
//Task-7:
function memoize(fn) {
    // Cache object to store results of previous computations
    const cache = {};

    return function(...args) {
        // Create a unique key based on the arguments
        const key = JSON.stringify(args);

        // Check if the result is already in the cache
        if (cache[key] !== undefined) {
            console.log(`Returning cached result for ${key}`);
            return cache[key];
        }

        // Compute the result and store it in the cache
        const result = fn(...args);
        cache[key] = result;
        console.log(`Storing result for ${key}`);
        return result;
    };
}

// Example usage with a simple function
function slowFunction(num) {
    // Simulate a slow computation
    for (let i = 0; i < 1e6; i++) {}
    return num * num;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Computation and store result
console.log(memoizedSlowFunction(5)); // Returning cached result
console.log(memoizedSlowFunction(10)); // Computation and store result
console.log(memoizedSlowFunction(10)); // Returning cached result


//Task-8:
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            console.log(`Returning cached result for ${key}`);
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        console.log(`Storing result for ${key}`);
        return result;
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(7)); // Computation and store result
console.log(memoizedFactorial(7)); // Returning cached result
console.log(memoizedFactorial(5)); // Computation and store result
console.log(memoizedFactorial(7)); // Returning cached result
console.log(memoizedFactorial(5)); // Returning cached result