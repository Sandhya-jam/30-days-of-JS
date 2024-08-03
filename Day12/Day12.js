//ACTIVITY-1:BASIC ERROR HANDLING WITH TRY-CATCH
//Task-1:try-catch block to handle the error
function ThatThrowsError(){
    throw new Error("Intentional error Ocurred");
}

try{
    ThatThrowsError();
} catch(e){
    console.error(`Error: ${e.message}`); //Error: Intentional error Ocurred
}

//Task-2:
function DivideNumbers(n1,n2)
{
    if(n2==0)
    throw new Error("The Denominator is zero,cant divide");
    else
    console.log(`The ans is ${n1/n2}`);
}

try{ 
    DivideNumbers(10,5);  //The ans is 2
    DivideNumbers(1,0);  //Error: The Denominator is zero,cant divide
}
catch(e){
    console.error(`Error: ${e.message}`);
}

//ACTIVITY-2:Finally Block
//Task-3:script that includes try,catch and finally block.
function IntentionalError()
{
    throw new Error("An Error Occurred");
}

try{
    console.log("Entering Try Block");
    IntentionalError();
}catch(e){
    console.log(e.message);
}finally{
    console.log("Entering Finally Block");
}
/*Entering Try Block
An Error Occurred
Entering Finally Block*/

//ACTIVITY-3:CUSTOM ERROR OBJECTS
//Task-4:
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function functionThatThrowsCustomError() {
    throw new CustomError("This is a custom error");
}

try {
    console.log("Entering try block");
    functionThatThrowsCustomError();
} catch (e) {
    if (e instanceof CustomError) {
        console.log(`Caught a custom error: ${e.message}`);
    } else {
        console.log(`Caught an unknown error: ${e.message}`);
    }
} finally {
    console.log("Entering finally block");
}

//Task-5:
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  // Function to validate user input
  function validateUserInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
      throw new ValidationError('Input must be a non-empty string');
    }
    return true;
  }
  
  function handleUserInput(input) {
    try {
      validateUserInput(input);
      console.log('User input is valid:', input);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log('Validation error:', error.message);
      } else {
        console.log('Unexpected error:', error);
      }
    }
  }
  
  handleUserInput('');         // Validation error: Input must be a non-empty string
  handleUserInput(123);        // Validation error: Input must be a non-empty string
  handleUserInput('Valid input'); // User input is valid: Valid input

//ACTIVITY-4:ERROR HANDLING IN PROMISES
//Task-6:Create promise that randomly resolves/reject and use catch to handle rejection
function PromiseOne(Error1)
{
    return new Promise((resolve,reject)=>{
        if(!Error1)
        {
            resolve("Promise Resolved");
        }
        else{
            reject("There is a error,Promise not resolved");
        }

    })
}

PromiseOne(true).then((ans)=>{
    console.log(ans);
}).catch((ans)=>{
    console.log(ans);
}); //There is a error,Promise not resolved

PromiseOne(false).then((ans)=>{
    console.log(ans);
}).catch((ans)=>{
    console.log(ans);
});//Promise Resolved

//Task-7:use try-catch in async function to handle errors from a promise
async function fn1(pr1)
{
    try{
       const val=await pr1;
       console.log(val);
    }catch(error)
    {
        console.error(error.message);
    }
}

const example=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error('Promise rejected'));
    },2000)
});

fn1(example);

//ACTIVITY-5:Graceful error handling in fetch
//Task-8:
fetch('https://invalid.url.com')
.then((response)=>{
    if(!response.ok){
        throw new Error('Network error');
    }
    return response.json();
})
.catch((error)=>{
    console.error("There was a problem with fetch Operation:",error);
})

//Task-9:
async function TofetchError()
{
    try{
        const response=await 
        fetch('https://invalid.url.com')
        if(!response.ok)
        {
            throw new Error('Network Error');
        }
        const data=await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.log('Fetch Error:',error.message);
    }
}

TofetchError();