//Task-1:Add click event listner
let btn=document.getElementById("btn")
let para=document.getElementById("Paris")
btn.addEventListener("click",()=>{
    para.innerText="The Eiffel Tower, an iconic symbol of Paris, was completed in 1889 as the entrance arch for the 1889 World's Fair. Standing at 324 meters tall, it was the tallest man-made structure in the world until 1930. Today, it is one of the most visited monuments globally, attracting millions of tourists annually."
});

//Task-2:Add Double click event listner
var img=document.getElementById("toggle")
img.addEventListener("double click",function(){
    if(img.style.display==="none"){
        img.style.display='block'
    }
    else
    img.style.display='none'
});

//Task-3:Add mouseover event listner
let box=document.getElementById('box')
box.addEventListener('mouseover',()=>{
    box.style.backgroundColor="blue";
});

//Task-4:Add mouseout event listner
box.addEventListener('mouseout',()=>{
    box.style.backgroundColor="aqua";
});

//Task-5:add keydown event listner
let search=document.getElementById('search')
search.addEventListener('keydown',()=>{
    console.log('Key pressed:',event.key);
});

//Task-6:add keyup event Listner
search.addEventListener('keyup',()=>{
    let inputValue=event.target.value;

    document.getElementById('display').textContent=inputValue;
})

//Task-7:Add submit event listner
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var formData = new FormData(event.target);
    var formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log('Form data:', formObject);
});

//Task-8:
document.getElementById('mySelect').addEventListener('change', function(event) {
    let selectedValue = event.target.value;
    document.getElementById('selectedValue').innerHTML = 'selected: ' +selectedValue;
});

//Task-9:
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

//Task-10:
document.getElementById('myList1').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

document.getElementById('addItemButton').addEventListener('click', function() {
    var newItem = document.createElement('li');
    newItem.textContent = 'Item ' + (document.getElementById('myList1').children.length + 1);
    document.getElementById('myList1').appendChild(newItem);
});