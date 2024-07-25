//OBJECTS
//ACTIVITY-1:Object Creation and access
//Task-1:create an object
const book={
    name:"Harry Potter",
    author:"J.K Rowling",
    Year:1997,
    // Method2:function(Yr){
    //     book.Year=Yr
    // }
}
console.log(book)  //{ name: 'Harry Potter', author: 'J.K Rowling', Year: 1997 }

//Task-2:access of object
console.log(book.name)        //Harry Potter
console.log(book["author"])   //J.K Rowling

//ACTIVITY:Object Methods
//Task-3:return a string with title and author name
book.Method1=function()
{
    return `The popular book is ${book.name} and its author is ${book.author}` //defining method
}

//Calling method
console.log(book.Method1())   //The popular book is Harry Potter and its author is J.K Rowling

//Task-4:Update book's Year
book.Method2=function(Yr)
{
    book.Year=2007
}
book.Method2(2007)
console.log(book)
/*{
    name: 'Harry Potter',
    author: 'J.K Rowling',
    Year: 2007,
    Method1: [Function (anonymous)],
    Method2: [Function (anonymous)]
  }*/

//ACTIVITY-3:Nested Objects
//Task-5:create object library
const library={
    name:"Literary Heaven",
    Books:[
        {
            title:"Fire And Ice",
            author:"Robert Frost",
            year:1874
        },
        {
            title:"Wings of Fire",
            author:"Dr. A P J Abdul Kalam",
            year:2000
        },
        {
            title:"It Ends With us",
            author:"Collen Hoover",
            year:2016
        }
    ]
}
console.log(library)
/*{
  name: 'Literary Heaven',
  Books: [
    { title: 'Fire And Ice', author: 'Robert Frost', year: 1874 },
    {
      title: 'Wings of Fire',
      author: 'Dr. A P J Abdul Kalam',
      year: 2000
    },
    { title: 'It Ends With us', author: 'Collen Hoover', year: 2016 }
  ]
}*/

//Task-6:access name of Library and titles of book
console.log(library.name)

let BookTitles=library.Books.map(book=>
    book.title)

console.log(BookTitles)  //[ 'Fire And Ice', 'Wings of Fire', 'It Ends With us' ]

//ACTIVITY-4:This keyword
//Task-7:use this keyword
book.Method3=function()
{
    return `The Book ${this.name} is published in year ${this.Year}`
}
console.log(book.Method3())   //The Book Harry Potter is published in year 2007

//ACTIVITY-5:Object Iteration
//Task-8:use For in loop
for(let property in book)
{
    console.log(`${property}:${book[property]}`)
}

/*name:Harry Potter
author:J.K Rowling
Year:2007
Method1:function()
{
    return `The popular book is ${book.name} and its author is ${book.author}` //defining method
}
Method2:function(Yr)
{
    book.Year=2007
}
Method3:function()
{
    return `The Book ${this.name} is published in year ${this.Year}`
}*/

//Task-9:
console.log(Object.keys(book))  //[ 'name', 'author', 'Year', 'Method1', 'Method2', 'Method3' ]
console.log(Object.values(book))
/*[
  'Harry Potter',
  'J.K Rowling',
  2007,
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
]*/