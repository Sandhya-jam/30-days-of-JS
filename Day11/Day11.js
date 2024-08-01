//ACTIVITY-1:understanding Promises
// Task-1:promise that resolve with a message
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Executed Successfully")
    },2000);
});

p1.then((message)=>{
    console.log(message);
})

//Task-2:Promise that rejects with error message
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("There is some error");
    },2000);
});

p2.catch((message)=>{
    console.log(message);
})

//ACTIVITY-2:Chaining Promises
//Task-3:Sequence of promises that stimulate fetching data from server in specific order
function getData(data)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success");
            console.log("Data:",data);
        },2000);
    })
}

console.log("Fetching data 1..");
getData(1).then((res)=>{
    console.log(res);
    console.log("Fetching data 2..");
getData(2).then((res)=>{
    console.log(res);
    console.log("Fetching data 3..");
getData(3).then((res)=>{
    console.log(res);
    console.log("Fetching data 4..");
getData(4).then((res)=>{
    console.log(res);
});
});
});
});

//ACTIVITY-3:Using Async/Await
//Task-4:async function that waits for a promise to resolve and logs the value
function api()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("promise resolved");
            resolve('success');
        },2000);
    });
}

async function result(){
    await api();
}
console.log(result());

//Task-5:async function that handles a rejected promise using try catch and logs the error msg
async function handle(pro1)
{
    try{
        const value=await pro1;
        console.log(value);
    }
    catch(error){
        console.error('Error:',error.message);
    }
}

const example=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error('Promise rejected'));
    },2000)
});

handle(example);

//ACTIVITY-4:Fetching Data from an Api
//Task-6:use fetch api to fetch data from public api and log response using promises
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

function fetchData() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData();

//Task-7:Use the fetch API to get data from public api and log the response data to the console using async/await
let src1 = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
const getCurrency = async()=>{
    try{
        let response = await fetch(src1);
        if(!response.ok){
            throw new Error(`Error: ${response.status} - Resource not found`);
        }
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};
getCurrency();

//ACTIVITY-5:Concurrent Promises
//Task-8:
function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success promise 3");
        },5000)
    });
}
const pro1 = promise3();
const pro2 = promise3();
Promise.all([p1,p2]).then((messages)=>{
    console.log(messages);
});

// Task 9
Promise.race([p1,p2]).then((messages)=>{
    console.log(messages);
});