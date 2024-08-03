//ACTIVITY-1:creating and exporting modules
//Task-1:Export a function add
import { Add } from "./Utility.js";
console.log(Add(2,4)); //6
console.log(Add(5,9)); //14

//Task-2:Export an object 
import { person } from "./Utility.js";
console.log(person);  //{name: 'Komala', age: 18, greetings: ƒ}

//ACTIVITY-2:Named and Default Exports
//Task-3:import Multiple functions
import { multiply,substract,string } from "./Utility.js";
console.log(multiply(7,8));  //56
console.log(substract(13,9)); //4
console.log(string('Hey!'));  //Hey!

//Task-4:export single function using default export and import it to use
import Voting from './Utility.js';
console.log(Voting(29));  //Eligible for Voting
console.log(Voting(12));  //Not eligible for Voting

//ACTIVITY-3:Importing entire Modules
//Task-5:
import *as utilities from './utility2.js';
console.log(`Pi:${utilities.Pi}`);  //Pi:3.14
console.log(`g:${utilities.g}`);    //g:9.81
console.log(utilities.Weather(45)); //The Temperature is high and likely to be hot
console.log(utilities.Weather(25)); //The temperature is normal and weather is expected to be normal
console.log(utilities.SayHello());  //Hello Everyone!How are you??

//ACTIVITY-4:Using Third Party Modules
//Task-6:
import lod from 'lodash';

const array=[7,0,2,9,4];
const chunkedArray=lod.chunk(array,3);
console.log(chunkedArray);

//Task-7:
import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();

