//Task-1:select any tag by its id and change its text content
let greeting=document.getElementById("greeting")
greeting.innerText="Hey What's Up??"

//Task-2:select tag by its class and change background color
let bkgrnd=document.querySelector(".Background")
bkgrnd.style.backgroundColor="red"

//Task-3:create new div with some text and append it to body
let body=document.querySelector("body")
let div=document.createElement("div")
div.innerText="This is attached to body"
body.append(div)

//Task-4:Create a new li element and add to existing ul
let fruits=document.getElementById("fruits")
let f1=document.createElement("li")
f1.innerText="Water Melon"
fruits.append(f1)

//Task-5:Select an element and remove it
let heading=document.getElementById("heading")
heading.remove()

//Task-6:remove lastchild of a specific html element
body.lastChild.remove()

//Tak-7:select an html element and change one of its attributes
let image=document.getElementsByTagName("img")
for(let j of image)
{
    j.src="https://th.bing.com/th/id/OIP.BTc4zTqvmapDSjahv3JixgHaE8?rs=1&pid=ImgDetMain";    
}

//Task-8:add and remove a css class to/from Html element
let f2=document.createElement("li")
f2.innerText="Kiwi"
fruits.append(f2)

fruits.lastChild.remove()

//Task-9:add click eventer
let div2=document.getElementById("msg")
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    div2.innerText="I was clicked"
})

//Task-10:add mouseover event
fruits.addEventListener("mouseover",()=>{
    fruits.style.border="solid"
    fruits.style.borderColor="brown"
})

