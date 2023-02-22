// object is a non primitive data type in js 
// object creatio
// let ractangle={
    
//   length:1,
//   breght: 3,
//   drow: function(){

//     console.log('drow');
//   }
// } ;

// rectangle();
// console.log(rectangle);
console.log("hello ge kese hen aap sabhi");
// "object property acces, call"

// ractangle.drow
// ractangle.length;
// ractangle.breght;

// **factory function creation***

//   we have to follow summ rules in creation of  factory and constructure function
// in factoryfunction=> camecase >=  factoryFunction;
// function ceratRectangle(length, breght){  //input para meturse "lenght.", "breght "   
//   return Ractangle={
    
//     // length: length,
//     length,
//     // breght: breght,
//      breght,
//     drow: function(){
  
//       // console.log('drow');
//     }
//   } ;
//   // return ractangle;
// }

// factory function call
// let factoryobject= ceratRectangle(4 ,5) //value for factory function  is 4,5,
// let factorycreation = ceratRectangle(5, 7)
// let factoryFuncation = ceratRectangle(66,55)

// constructor function creation
  //   we have to follow summ rules in creation of  factory and constructure function


//  in constructure function >=  Pascle Notetion>= firt latter of evry word is capital >= ConstructreFunction 
// constructor function creation

function Hello( len, breg)
{


  // is me this ek object ko darshata he alag se object nahi banana padta he
 
  // this.length=3, 
  this.length= len;  
  // this.breght=4,
  this.breght=breg;
  this.drow=function()
  {

    console.loge("dorowing")
  }
}

let ConstructorOject = new RectengleObject(45,93);// new ek kyword he jo ek naya object deta he


// ****dynamic neture of object**** 

//  value adding on object 
ConstructorOject.color= "green";
console.log(ConstructorOject);

//  value delete on object

delete ConstructorOject.color;
console.log(ConstructorOject);

// **** constructure property in js****
// iske dwara ham kisi bhi object ka constructer pata kar sakte hen

ConstructorOject.constructor
console.log(ConstructorOject.constructor);

Ractangleobject.constructor
console.log(Ractangleobject.constructor);

