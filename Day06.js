//ACTIVITY-1:Array Creation and Access
//Task-1:create array and log to console
let nums=[1,2,3,4,5]
console.log(nums)    //[ 1, 2, 3, 4, 5 ]

//Task-2:Access first and last element of array
let arr1=["Sandhya","NIT","JavaScript","OCD"]
console.log(arr1[0])               //Sandhya
console.log(arr1[arr1.length-1])   //OCD

//ACTIVITY-2:Array Methods(BASICS)
//Task-3:push method
let cities=["Hyderabad","Mumbai","delhi","Banglore"]
cities.push("Kolkata");
console.log(cities)    //[ 'Hyderabad', 'Mumbai', 'delhi', 'Banglore', 'Kolkata' ]

//Task-4:pop method
cities.pop()
console.log(cities)   //[ 'Hyderabad', 'Mumbai', 'delhi', 'Banglore' ]

//Task-5:shift
cities.shift()
console.log(cities)   //[ 'Mumbai', 'delhi', 'Banglore' ]

//Task-6:Unshift
cities.unshift("chennai")
console.log(cities)     //[ 'chennai', 'Mumbai', 'delhi', 'Banglore' ]

//ACTIVITY-3:Array Methods(Medium)
//Task-7:map method
let arr=[18,45,63,10]
let newArr1=arr.map((val)=>{
    return 2*val;
});
console.log(newArr1)   //[ 36, 90, 126, 20 ]

//Task-8:filter method
let newArr2=arr.filter((val)=>{
    return val%2==0
})
console.log(newArr2)  //[ 18, 10 ] 

//Task-9:reduce method
const sum=arr.reduce((res,cur)=>{
   return res+cur
})
console.log(sum)   //136

//ACTIVITY-4:Array Iteration
//Task-10:for loop
let a=[30,45,26,21,8]
for(let i=0;i<a.length;i++)
{
    console.log(a[i])  //30 45 26 21 8
}

//Task-11:
a.forEach((val)=>{
    console.log(val)   //30 45 26 21 8
})

//ACTIVITY-5:Multi-Dimensional Array
//Task-12:2-D array
let B=[[1,2,3],
       [4,5,6],  
       [7,8,9]]
console.log(B)   //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

//Task-13:log specific element
console.log(B[2][1])   //8
console.log(B[1][1])   //5
console.log(B[2][2])   //9
