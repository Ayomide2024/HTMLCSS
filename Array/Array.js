// // // Array Basics 
// // const array = ['Man United', 'liverpool', 'baca', 'bayan', 'PSG', 'manchester city']
// // array [6]= 'chelsea'
// // array [3]= 'Real madrid'
// // console.log(array);

// // Array Methods/Properties 

// //Values()
// // const arr = ['apple', 'banana', 'cherry']
// // const iterator = arr.values();

// // for(const value of iterator){
// //     console.log(value);
// // }

// //Length()
// // const numb = [1,2,3,4,5,6,7,8,9,10];
// // console.log(numb.length);

// // reverse()
// // console.log(numb.reverse());

// //sort()
// //  let letter = ["a","f","b","c","e","d","g",]
// //  console.log(letter.sort());

//  // at()
// //  console.log(letter.at(5));

//  //fill()
// //  const arr = ['apple', 'banana', 'cherry', 'mango', 'egg']
// //  console.log(arr.fill('apple', 3));

//  // from()

//  //join()
// //  const arr = ['apple', 'banana', 'cherry']
// //  const gg = [ 'egg', 'man']
// //  console.log(arr.join(','));

//  // toString()
// //  const arr = [1,2,3,4]
// // console.log(typeof(arr.toString()));

// //pop()
// // const arr = ['apple', 'banana', 'cherry']
// // console.log(arr.pop());
// // console.log(arr);

// //forEach()

// // const arr = ['apple', 'banana', 'cherry']
// // arr.forEach(function(item){
// //     console.log(item);
// // })

// //shift()

// // const arr = ['apple', 'banana', 'cherry']
// // console.log(arr.shift());
// // console.log(arr);

// //copyWithin()
// // const arr = [1,2,3,4,5]
// // console.log(arr.copyWithin(2));

// //push()
// // const arr = ['apple', 'banana', 'cherry']
// // arr.push('orange');
// // console.log(arr);

// // unshift()
// // const arr = ['apple', 'banana', 'cherry']
// // arr.unshift('banana', 'orange')
// // console.log(arr);

// // concat()
// // const arr = ['apple', 'banana', 'cherry']
// // console.log(arr.concat('orange', 'grapes'));

// //spice()
// // const arr = ['apple', 'banana', 'cherry']
// // arr.splice(2, 2, 'mango', 'orange')
// // console.log(arr);

// // const date = new Date();
// // console.log(date);










// // const cities = ['paris', 'london', 'rome', 'madrid', 'berlin']


// // // destucturing
// // const[paris, london, rome, madrid, berlin] = cities
// // console.log(madrid);


// // iterrating arrays

// // // for loop ...
// // let numbers = [1,2,3,4,5,6,7,8,9,10]
// // for(let index = 1; index <= numbers.length; index++){
// // // console.log(index);
// // }




// // // for of loop ...
// // let food = ['rice', 'beans', 'salad', 'eba', 'fufu', 'amala']
// // for(let num of food){
// // // console.log(num);
// // } 





// // // For Each Loop ...
// // let players = ['rolnado', 'messi', 'benzima', 'hazard', 'dembele', 'nema', 'mbape']
// // const footballers = players.forEach(function(item){
// //     console.log(item);
// // })






// // class activity
// // Iterate through an array to get the odd numbers only in it.
// // let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// // let onlyOddNumbers = [];
// // for (let num of numbers){
// //     if(num % 2 === 1){
// //         onlyOddNumbers.push(num)
// //     }
// // }
// // console.log(onlyOddNumbers);
// const btn = document.getElementById('my-button');
// btn.addEventListener('click', clickme);
// function clickme(){
//     switch (month = 5) {
//         case 1: month = 'January'
//             break;
//             case 2: month = 'February'
//                 break;
//                 case 3: month = 'March'
//                     break;
//                     case 4: month = 'April'
//                         break;
//                         case 5: month = 'May'
//                             break;
//                             case 6: month = 'June'
//                                 break;
//                                 case 7: month = 'July'
//                                     break;
//                                     case 8: month = 'August'
//                                     break;
//                                     case 9: month = 'September'
//                                     break;
//                                     case 10: month = 'October'
//                                     break;
//                                     case 11: month = 'November'
//                                     break;
//                                     case 12: month = 'December'
//                                     break;
    
//         default:
//             break;
//     }
// alert(month)
// }



// Spread operator
// const num1 = [1,2,3,4,5,6,7,8,9,0]
// const num2 = [11,12,13,14,15,16,17,18,19,20]
// const fruit = ['Apple', 'Pineapple', 'PawPaw', ...num1, ...num2]
// console.log(fruit);


// switch (day = 6) {
//     case 1: 
//         day = 'Sunday'
//         break;
//         case 2: 
//         day = 'Monday'
//         break;
//         case 3: 
//         day = 'Tuesday'
//         break;
//         case 4: 
//         day = 'Wednesday'
//         break;
//         case 5: 
//         day = 'Thursday'
//         break;
//         case 6: 
//         day = 'Friday'
//         break;
//         case 7: 
//         day = 'Saturday'
//         break;

//     default:
//         break;
// }

// console.log(day);

// Filter method
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const filterNum = numbers.filter((item)=>{
//     return item % 2 === 1;
// })
// console.log(filterNum);


// const jj = 5
// const hh  = 7
// const name7 = function 


// naming function
// function Hi(){

// }


// function expression
// let sayHi = function(){

// }



// arrow function







// Map method
// const students = ['Emeka', 'Ibrahim', 'Sola', 'Ozaze', 'John', 'Mary']
// const mapStudents = students.map(function(item){
//     return item;
// })
// console.log(mapStudents);


// const number



 const characters = [
    {
        name: 'Luke skywalker',
        height: '172',
        mass: '77',
        eye: 'blue',
        gender: 'male',
    },
{
    name: 'dark Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
},
{
    id:'2',
    name:'leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female'
},
{
    name: 'Anakin skywalker',
    heigth: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
},
];

// const names = characters.map((character) => character.name
// );
// console.log(names);
// const height = characters.map((character) => character.height);
// console.log(height)



// const mass = characters.map((character) => character.mass);
// console.log(mass);


// const gender = characters.map((character) => character.gender);
// console.log(gender);



// const eye_color = characters.map((character) => character.eye_color);
// console.log(eye_color);


// const name = characters.map((i) => i.name);
// console.log(name);

// function name(){
//    return alert('welcome')
// }
// name()



function sabi (){

}

const sabi = function(){

}
const sabi = ()=>{}
Map((item) => hh)



Map((item) => {
    return hh
})