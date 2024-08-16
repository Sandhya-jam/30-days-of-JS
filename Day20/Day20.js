//ACTIVITY-1:UNDERSTANDING LOCAL STORAGE
//Task-1:
localStorage.setItem('greetings','Hello,how are you?');
const retrievedValue=localStorage.getItem('greetings');
console.log(retrievedValue);//Hello,how are you?

//Task-2:
let obj={
    name:'Komala',
    age:18
}
localStorage.setItem('Myobject',JSON.stringify(obj));
const value=localStorage.getItem('Myobject');
console.log(JSON.parse(value));
/*{name: 'Komala', age: 18}
age:18
name: "Komala"
[[Prototype]]: Object
*/

//ACTIVITY-2:USING LOCAL STORAGE
//Task-3:
const setusername=document.getElementById("input_user");
const setemail=document.getElementById("input_email");
const button=document.getElementById("click");
let user=document.getElementById("user");
let email=document.getElementById("email");


button.addEventListener('click',()=>{
    const value1=setusername.value;
    const value2=setemail.value;
    localStorage.setItem("name",value1);
    localStorage.setItem("email",value2);
    location.reload();
});

window.addEventListener('load',()=>{
    const uname=localStorage.getItem("name");
    const uemail=localStorage.getItem("email");
    user.innerText="hello "+uname;
    email.innerText="Your email is "+uemail;
})

//Task-4:
localStorage.setItem('color','red');
console.log(localStorage.getItem('color')); //red
localStorage.removeItem('color');
console.log(localStorage.getItem('color')); //null

//ACTIVITY-3:SESSION STORAGE
//Task-5:
sessionStorage.setItem('string','This is a String');
console.log(sessionStorage.getItem('string')); //This is a String

//task-6:
const obj1={
     Book:'Harry Potter',
     author:'J K Rowling'
}
sessionStorage.setItem('book',JSON.stringify(obj1));
const res=sessionStorage.getItem('book');
console.log(JSON.parse(res));
/*{Book: 'Harry Potter', author: 'J K Rowling'}
Book
: 
"Harry Potter"
author
: 
"J K Rowling"
[[Prototype]]
: 
Object*/

//ACTIVITY-4:USING SESSION STORAGE
//Task-7:
const setusername1=document.getElementById("input_userone");
const setemail1=document.getElementById("input_emailone");
const button1=document.getElementById("clickone");
let user1=document.getElementById("userone");
let email1=document.getElementById("emailone");

button1.addEventListener('click',()=>{
    const value1=setusername1.value;
    const value2=setemail1.value;
    sessionStorage.setItem("name1",value1);
    sessionStorage.setItem("email1",value2);
    location.reload();
});

window.addEventListener('load',()=>{
    const uname=sessionStorage.getItem("name1");
    const uemail=sessionStorage.getItem("email1");
    user1.innerText="hello "+uname;
    email1.innerText="Your email is "+uemail;
})

//Task-8:
sessionStorage.setItem('fruit','apple');
console.log(sessionStorage.getItem('fruit')); //apple
sessionStorage.removeItem('fruit');
console.log(sessionStorage.getItem('fruit')); //null

//ACTIVITY-5:COMPARING LOCAL AND SESSION STORAGE
//Task-9:
function setValues(key,value)
{
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value);
}

setValues('Role','frontend developer');
console.log(localStorage.getItem('Role'));  //frontend developer
console.log(sessionStorage.getItem('Role')); //frontend developer

//Task-10:
function clearAndVerify()
{
    localStorage.clear();
    sessionStorage.clear();

    if(localStorage.length===0 && sessionStorage.length===0)
    {
        console.log("Both local and session storages are empty");
        
    }
    else
    {
        console.log("Failed to clear the storage");
        
    }
}
clearAndVerify();
/*Both local and session storages are empty
Live reload enabled.*/










