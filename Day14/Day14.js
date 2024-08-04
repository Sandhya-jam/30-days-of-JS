//ACTIVITY-1:Class Definition
//Task-1:
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    greetings(){
        return `Hello ${this.name} and Your age is ${this.age}`;
    }

    UpdateAge(years){
        this.age=years;
        return `Hello! ${this.name}.Your Updated Age is ${this.age}`
    }

    static GenericGreetings(){
        return 'hey Whats up??';
    }
}

const Person1=new Person('Ashu',18);
console.log(Person1.greetings());  //Hello Ashu and Your age is 18

//Task-2:
console.log(Person1.UpdateAge(19)); //Hello! Ashu.Your Updated Age is 19

//ACTIVITY-2:Class Inheritance
//Task-3:
class Student extends Person{
    static NumberOfStud=0;

    constructor(name,age,StudId){
        super(name,age);
        this.StudId=StudId;
        Student.NumberOfStud+=1;
    }

    getStudentId(){
        return `Your Student Id: ${this.StudId}`;
    }

    //task-4:
    greetings(){
        return `Hello! ${this.name}.Your Age is ${this.age} and your Student Id:${this.StudId}`;
        
    }
}

const Student1=new Student('Komala',18,'123102092');
console.log(Student1.greetings());  //Hello Komala and Your age is 18
console.log(Student1.getStudentId()); //Your Student Id: 123102092

//Task-4:
console.log(Student1.greetings());  //Hello! Komala.Your Age is 18 and your Student Id:123102092

//ACTIVITY-3:Static Methods And Properties
//Task-5:
console.log(Person.GenericGreetings()); //hey Whats up??

//Task-6:
const Student2=new Student("Lilly",20,'12482011');
const Student3=new Student("Blessy",16,'3452001');
const Student4=new Student("Jeevitha",17,'3412501');
console.log(Student.NumberOfStud); //4

//ACTIVITY-4:Getters And Setters
//Task-7:
class PersonTwo{
    constructor(FirstName,LastName){
        this.FirstName=FirstName;
        this.LastName=LastName;
    }

    get FullName(){
        return `Your FullName is ${this.FirstName} ${this.LastName}`
    }

    set FullName(name){
        const[FirstName,LastName]=name.split(' ');
        this.FirstName=FirstName;
        this.LastName=LastName;
    }
}
const P1=new PersonTwo('Spoorthi','Reddy');
console.log(P1.FullName); //Your FullName is Spoorthi Reddy

//Task-8:
P1.FullName="Charitha Reddy";
console.log(P1.FullName);  //Your FullName is Charitha Reddy