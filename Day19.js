//ACTIVITY-1:BASIC REGULAR EXPRESSIONS
//Task-1:
let pattern=/JavaScript/g;
let testString="JavaScript is an useful language and it is fun learning JavaScript";
let matches=testString.match(pattern);
console.log(matches); //[ 'JavaScript', 'JavaScript' ]

//Task-2:
let pattern1=/\d/g;
let testString1="There 124 people in 20 rooms";
let matches1=testString1.match(pattern1);
console.log(matches1); //[ '1', '2', '4', '2', '0' ]

//ACTIVITY-2:CHARACTER CLASSES AND QUANTIFIERS
//Task-3:
let pattern2=/\b[A-Z][a-z]*\b/g;
let testString2="Hello Whats Up and how Are you";
let matches2=testString2.match(pattern2);
console.log(matches2); //[ 'Hello', 'Whats', 'Up', 'Are' ]

//Task-4:
let pattern3=/\d+/g;
let testString3="There 134 apples and 50 bananas";
let matches3=testString3.match(pattern3);
console.log(matches3);//[ '134', '50' ]

//ACTIVITY-3:GROUPING AND CAPTURING
//Task-5:
let pattern4=/\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/;
let phoneNo="(123) 456-7890";
let matches4=phoneNo.match(pattern4);
if(matches4)
{
    let AreaCode=matches4[1];
    let CentralCode=matches4[2];
    let lineNUmber=matches4[3];

    console.log("AreaCode: ",AreaCode); //AreaCode:  123
    console.log("CentralCode: ",CentralCode); //CentralCode:  456
    console.log("lineNumber: ",lineNUmber); //lineNumber:  7890
}

//Task-6:
let pattern5=/([^@]+)@([^@]+)/;
let email="hello123@yahoo.com";
let matches5=email.match(pattern5);
if(matches5)
{
    let username=matches5[1];
    let domain=matches5[2];

    console.log("username:",username); //username: hello123
    console.log("domain:",domain); //domain: yahoo.com
}

//ACTIVITY-4:ASSERTIONS AND BOUNDARIES
//Task-7:
let pattern6=/^Spot/;
let pattern7=/^dog/;
let testString4="Spot is a dog";
console.log(pattern6.test(testString4));//true
console.log(pattern7.test(testString4));//false

//Task-8:
let pattern8=/Spot$/;
let pattern9=/dog$/;
console.log(pattern8.test(testString4));//false
console.log(pattern9.test(testString4));//true

//ACTIVITY-5:
//Task-9:
let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let password1="Hello@123";
console.log(regex.test(password1));//true
let password2="hello@12";
console.log(regex.test(password2));//false

//Task-10:
let regex1 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
let url1="https://www.example.com";
let url2="https://example";
console.log(regex1.test(url1));//true
console.log(regex1.test(url2));//false




