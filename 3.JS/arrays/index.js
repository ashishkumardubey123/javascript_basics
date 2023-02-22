// console.log("let's start tha new topic-- arry");

// arry creation

// let number=[1,3,4,5,66,78,9,]
// console.log(number);
// // inko accis karne ke liye index ka use karte hen--1 1 2 3 4---
//  console.log(number[4]);

//  **** insertion  of arry
// end me-- push
//  number.push(8);
//  console.log(number);

//   bigining me--- unshift
// number.unshift(9);
// console.log(number); 
//  beach me jodne  ke liye ---splice
     
// number.splice( 3,0,'r', 'f');
// console.log(number);

// ***searching*** @@{ primitive ke uper }@@
// arry  serch karne ke liye indexOf mathord ka use karte hen 

// console.log(number.indexOf(3));

// ##number existence in arry cheking## include ka use karte hen 

// console.log(number.includes(4));

// if (number.includes(7777779)){
//     console.log("true")
// }

//     else{
 
//         console.log("not true")
//     }

//  is me pahale vo number likharte hen jise serch karna ho fir jis index se start karna ho vo likhae hen 
// yhan par mene 1 ko serch karne ka command likha he par meri serch ko mene 4th index se search karne ko kaha he  
    // console.log(number.indexOf(1,4))


    // @@@references me searching ke liye to call back function ka use karte hen ise pradicate function bolte hen @@@

    //  call back function me find() mathood ka use karte hen 

//     let arrys=[
//         {no:1, naam:'ashish'},
//         {no:2, naam2:'dubey '}
//     ];
    // console.log(courses);


//    let course = arrys.find( function(arrys)
//     {

//         return arrys.naam2
        
//     }   );
//  console.log(course);

//  **arow function ka use karke serching-----

// let objectserchingvalue = arrys.find( objectserchingvalue => objectserchingvalue.naam2  );

//      console.log(objectserchingvalue);

// ****removing eliment****

// let num=[1,2,3,4,6,7,8,9]
// console.log(num)

// last eliment ko remove karne ke liye  pop ka use karte hen 
// num.pop();
// console.log(num)

// first elseliment ko remove karne ke liye sift mathood ka use karte hen 
// num.shift()
// console.log(num)
// beech se remove karne ke liye splice mathood ka use karte hen
// isme pahale index batate hen jis index se removin start karni he fir ye batate hen ki kitane eliment remove karte hen +++yahn 2 index he or 1 eliment ki sankhya
// num.splice(2,1)
// console.log(num)


// **** Emptying an Arry****

// let ash=[1,2,3,4,6,7,8,9];
// ek tareeka ye he isko khali karne ka  
// ash=[];
// console.log(ash);
// par isse puri tarh khali nahi hota he 
// khali karne ke liye arry ki lengt "0" kar dete hen 
// ash.lenght=0 
// console.log(ash);

// splice mathood ka use karke bhi arry ko empty kiya ja sakta he
// ash.splice(0,7);
//   OR
//  ash.splice(0,ash.splice)
// console.log(ash);

// ****combining and slicing Arrys**** 

// arry ko cobine karne ke liye concat mathod ka use karte hen
// let first = [1,2,3,4];

// let second=[5,6,7,8,9];
//  let combing= first.concat(second);
//  console.log(combing);

//  arry slice karne ke litye slaice mathod ka use karte 
//  slice ke andar starting and eding idex bhi dete hen ye last vale index ko jis index tak endind index diya gaya he use chhod deta he
// let sliced=combing.slice(3);
// let sliced=combing.slice(2,5);

// console.log(sliced);


// #####   H.W.  #####---- COMNINING AND SLICING IN OBJECT 


// ****** SPRED OPRETOR*****

// arry ko combine karne ke liye spred-opretor ka bhi use kar sakte hen


// let first = [1,2,3,4];

// let second=[5,6,7,8,9];

// //  let comined= [...first, ...second];
//  let comined= [...first,'a','b', ...second, 'true', 'fals'];

//   console.log(comined);

// ***** iterating an arry*****
// for of loop ka use karke

// let arr =[1,2,3,4,5]
// for (let value of arr) 
// {
//          console.log(value)    
// }

// foreacEach looa use karke
//  yahan ek call back function ka use karte hen

// arr.forEach(function(number){

//     console.log(number);
// });
//  ## arrow funnction me convert
// arr.forEach(number=> console.log(number)
// );

// *** joining an Array****

// join matood ka use karke 


// let dubey=[1,2,3,4,5,6,7]
// const joined= dubey.join('')
// const joined= dubey.join(',')
//  console.log(joined);


//  ***split*** 
// ye sting ke uper kaam karata he string ko tod ke arry deta he

//  split matod ka use karke

// let masage='this is may naam'
// let splited= masage.split( ' ')
// console.log(splited);

// **** shorting a arry****
// isse arry badhate kram me likha jate hen 

// let poonm= [00,99,8,77,66,5,44,33,22,11] 
// poonm.sort();
// parseInt(poonm)

// console.log(poonm);
// arry revers karna 
 
// poonm.reverse();

// console.log(poonm);


// ***object ko sort karna ****
//    $$$$$$$$$$$$$$$ H.W. $$$$$$$$$$$$$$$$$

// ****** FILTERING ARRY******

// FILTER MATOOD KA USE KARKE

// value ko chhat ke detahe 

// let punam=[1,2,3.,-2.-3,-4]

// let filterd=punam.filter(value=> value<0
// );

// console.log(filterd); 

// *****maping on arry******

// map mathood ka use karke
//  ksi arry ko map karne ke liye use hota he

// let ash= [1,3,4,5,6,7,8,9]
// let student=ash.map(value=> 'student_no' + value

// )

// console.log(student);

// ****** mapping with object********


// let ashi= [1,2,3,-4,-5,-6]
// let ans=  ashi.filter(function(value)
// {

//     return value>=0;     
// })
// //  let maped=   ans.map(function(num)
// //  {
// //   return   {value: num}
     
// //  })

// // same code with using arw function
//  let maped=   ans.map(num=>  {value: num}
     
//  )
//  console.log(maped)

//  shening ka bhi use karke ye kar sakte hen

// let ans= ashi.filter(value=> value>=0)
//              .map(num=> {value: num})         

//              console.log(ans)

// ***** reducing an arry***
//  arry ko covert karke ek sum value me convert karna chahte hen to reduse mathod ka use kare hen
let ab=[1,2,3,4,5,8,6]
// arrow function ka use karke 
let as=ab.reduce((acumiletor, correntvalue)=> acumiletor+correntvalue)
console.log(as)