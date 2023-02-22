
// function ek block of code hota he jo ek specific task ko fulfil kartahe
// function assignment
// js sare sunction ko ja j.s. ki file ke sabse uper rakha deta he jise hoisting kahte hen  

// //*** */ function assignment***
// Namedfunction assignment
//  let send =function walk()
//     {

//     console.log('helo')
//     }
// console.log(send());

// anonymusfunction assignment
// let sended =function ()
// {

// console.log('helo')
// }
// console.log(sended());

// *****function dicleretion*****
// function declearetion me function call ko kahin bhee likha sakte hen 

// run()

// function run()
// {

// console.log('running')

// }


// let a=44;
// let a= 6;
// var b = 22;
// var b = 33;
// console.log(a,b);

// **** argument ****function call ke time kucha exta value de dete hen to fah argument mes stor hote hen or badle me ek object milta he 

// function sum(a,b)
// {
// console.log(arguments)
// return a+b;

// };
// console.log(sum(1,2,3,4,5,6))

// **** dynamic function****
// is me kitni bhi value de do jo iski body mwe code likha hoga vo task ye sari value ke sath  parform karke de deta he 

// function sum(){
//    let num=0;
//    for (let value of arguments) 
            // num= num+value;
            // return  num;
// };


//console.log(sum(1,3,4,5,6,7))



// ****rest opretor****

// function sum( ...arg){

// console.log(arg);

// }
// sum (1,3,4,5,6,6,7,8)


// ***** defult parameters****

// user ke  koi value na dene par defult value pass karta he yahn "r""y" ek defult para meter he 

// function interest(p,r=10,y=7){

//     return p*r*y/100;
// }

//       console.log (interest(10000,4));


// *****getter- setter *****
// getter ke dvara property access karte hen property
// setter kwe vara property chane or mutate kar sakte hen
// let person= {
//     fname: 'ashish',
//     Lname:'dubey',
//     get  fullname(){
//         return `${person.fname}        ${person.Lname}`
//     },
//     set fullname(velue){
//    let parts= velue.split('');
//    this.fname =parts[0],
//    this.Lname = parts[1]
//     }
// }
// person.fullname = 'rahul'

// console.log(person.fullname)

// **** tray and catch block*** 
// jis bhi code me arror ane ki sambhavna he usme try ka use karte hen 
// fir us arro ko cath ke andar thro kar denge ki kis karan se error aya he 

// try{  
//     person.fullname =4
// }

// catch(e)
// {

    //   alert(' ye have sand a number in a full name')
    // throw new Error('you have not send a spasific details');


// }

//  console.log(person.fullname)


//****scope*****/
// kisi variable ka life time jo hota he vo scope hota he


{


    let a=7;
    var c= 6 
}
// let="a" prin nahi hoga kun ki iski life brcet ke andar tak he seemit rahati 
// he const ka scope bhi itna hi hota he
//  var=c print ho jayega kun ki iska life barket ke bahar tak bhi rahta he
// par var ka scope function ke andar hota he agar vo function ke andar he to
function b(){


    var d= 7;
}

// console.log(a);
console.log(c);
console.log(d);