let cl = console.log;

let cricketPlayers = [
  { name: "Rohit Sharma", country: "India", role: "Batsman",matches: 258,runs: 10500, age: 36 },
  { name: "Virat Kohli", country: "India", role: "Batsman", matches: 275, runs: 12898, age: 35},
  {name: "MS Dhoni", country: "India",role: "Wicket Keeper", matches: 350, runs: 10773,age: 42},
  { name: "Jasprit Bumrah", country: "India",  role: "Bowler",  matches: 120, wickets: 240, age: 30},
  { name: "Joe Root", country: "England", role: "Batsman", matches: 170,runs: 6207, age: 33 },
  {  name: "Babar Azam",country: "Pakistan", role: "Batsman", matches: 108, runs: 5729, age: 29 },
  {name: "Kane Williamson", country: "New Zealand", role: "Batsman", matches: 161, runs: 6554,age: 34},
  { name: "Steve Smith", country: "Australia",role: "Batsman", matches: 139, runs: 5544, age: 34},
  {name: "Rashid Khan", country: "Afghanistan", role: "Bowler",  matches: 96, wickets: 187,age: 25 },
  { name: "Jason Holder",country: "West Indies",role: "All Rounder",matches: 138,runs: 2164,wickets: 157,age: 32}
];

//********************************************************************************/
//High Order function reduce
//Task 1 = Addition Of Whole Array Using Reduce
//Method 1- for
//  let res=0;
// for(let i=0; i<cricketPlayers.length;i++){
//   res += cricketPlayers[i].age
// }
// cl(`Total age of Whole paleys is ${res}`);
// //Method 2 - Foreach
// let res1 =0;
// cricketPlayers.forEach((param)=>{
//     res1+=param.age;
// })
// cl(`Total age of Whole paleys is ${res1}`);
// //Method 2- Reduce
// let result = cricketPlayers.reduce((acc,cv)=>{
//     acc= acc+cv.age;
//      return acc;
// },0);
// cl(`Total age of Whole paleys is ${result}`);

//********************************************************************************/

//Task 2 - Multiplication of all ages in array 
//Method 1 - Using For
// let result1 = 1;
// for(let i=0;i<cricketPlayers.length;i++){
//     result1 *= cricketPlayers[i].age;
// }
// cl(`Multiplicatiob of the the whole array is ${result1}`)

// //Method 2 - Using ForEach
// let result2 = 1;
// cricketPlayers.forEach(param => result2*=param.age)
// cl(`Multiplicatiob of the the whole array is ${result2}`)

// //Method 3 - Using Reduce
// let result3 = cricketPlayers.reduce((acc,cv)=>{
//     acc*=cv.age;
//     return acc;
// },1);
// cl(`Multiplicatiob of the the whole array is ${result3}`)

//********************************************************************************/

//Task 3- ['payers name'..]
//Method 1 - Usinf For 
// let names=[];
// for(let i=0;i<cricketPlayers.length;i++){
//    names.push(` ${cricketPlayers[i].name}`)
// }
// cl(names);

// //Method 2 -  Using forEach
// let result = [];
//  cricketPlayers.forEach((param)=>{
//     result.push(param.name)
// });
// cl(result);

// //Method 3 - Using Reduce
// let result1 = cricketPlayers.reduce((acc,cv)=>{
//  acc.push(cv.name)
// return acc;
// },[]);
// cl(result1);

//********************************************************************************/

//Task 4 - Find The Square Root od each runs in array
//Method 1 - Usinf For
// let result=[];
// for(let i=0;i<cricketPlayers.length;i++){
//     result.push(Math.sqrt(cricketPlayers[i].runs));
// }
// cl(result);

// //Method 2 -Using ForEach
// let result1 = [];
// cricketPlayers.forEach(param  => result1.push(Math.sqrt(param.runs)));
// cl(result)

// //Method 3 - Using reduce

// let res = cricketPlayers.reduce((acc,cv)=>{

//     acc.push(Math.sqrt(cv.runs));
//     return acc;
// },[]);
// cl(res);

//********************************************************************************/

//Task - 5 = ['Rohit sharma - 38 Years'];
//Mathod 1  - Using For
// let res = [];
// for(let i=0; i<cricketPlayers.length;i++){
//     res.push(`${cricketPlayers[i].name} - ${cricketPlayers[i].age} Years`);
// } 
// cl(res);

//Method 2 - Using  forEach
// let res = [];
// cricketPlayers.forEach((param)=>{
//     res.push(`${param.name} - ${param.age} Years`);
// });
// cl(res);

//Method 3- Using Reduce
// let result = cricketPlayers.reduce((acc,cv)=>{
//     acc.push(`${cv.name} - ${cv.age} Years`)
//     return acc;
// },[]) ;
// cl(result)
//********************************************************************************/

//Task 6 - print the players who is grater than 35 years;
//Method 1  - Using For
// let res = [];
// for(let i =0 ; i<cricketPlayers.length ; i++){
//     if(cricketPlayers[i].age >= 35){
//         res.push(`${cricketPlayers[i].name}`);
//     }
// };
// cl(res)

//Method 2 - Using ForEach
// let res = [];
// cricketPlayers.forEach((param) =>{
//     if(param.age >= 35){
//         res.push(`${param.name} - ${param.age} Years`);
//     }
// });
// cl(res);

//Method 3 - Using Reduce
// let result  = cricketPlayers.reduce((acc,cv) =>{
//     if(cv.age >=35){
//         acc.push(`${cv.name} - ${cv.age}`)
//     }
//     return acc;
// },[]);
// cl(result)

//********************************************************************************/
