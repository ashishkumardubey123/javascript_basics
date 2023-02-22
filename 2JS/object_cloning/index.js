console.log("hello ji object cloning")
// *** itretion ka use karke ****

let src={
     color: 'yello',
     hight: 6,
     whait:80
};

let object={};       

for( let key in src){

    object[key]= src[key];
}
console.log(object);
console.log(src);


// **** assign ka use kre 


// let b= {

//     a:5,
//     b: 7,
//     c: 10
// };

// let h = Object.assign({}, b);

// console.log(b);
// b.c++;
// console.log(b)
// console.log(h)

// *** spred opretor*****

// let src ={
      
//     value1: 48,
//     value2: 786,
//     value3:897


// };
// let dest= {
//     ...src
// };

// console.log(src)
// console.log(dest);
// src.value1++;
// console.log(dest); 


// *****constructor property **** 
// iske dwara ham kisi bhi object ka constructer pata kar sakte hen


console.log(object.constructer)
