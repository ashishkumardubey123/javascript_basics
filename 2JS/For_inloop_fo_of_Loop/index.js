

let rectangle={

    length:2,
    breadth:4,
    color: 'yello'
};

// ***for in loop***



for(let key in rectangle)
{
//  object ke andar ki "key acces karne ke liye "----
    console.log( key);

//   object ke andar ki key ke sath value acces karne ke liye -----
    console.log( key,rectangle[key])
    // yahan par baracket notetion ka use hota he!!
}


// ****for-of loop***
//  Note:- inko keval iterebes par hi laga sakte hen -- arry, map, etc

// par agar ham ise iterable me convert karde  to ye objet me bhi chal jayega 
//   ex==
for( let key of Object.keys(rectangle))
{

    // agar object ke andar ki 
    console.log(
                key, rectangle[key]
            )


};

// ye cjeck karna he ki object ke andar koi or property he to is ko ese likha sakte hen 

if ('color' in rectangle)
{

console.log( "true");

}
else{

    console.log("fauls")
}