// Primitive datatype:ye call by value hote hai

// 7 types : string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scorevalue=100.3

const isLoggedIn=false
const outsideTemp=null
let useremail;

const id=Symbol('123')
const anotherId=Symbol('123')


console.log(id===anotherId);


// const bigNumber=4893859395n



//Reference type(non primitive)

//array,objects,functions

const heros=["shaktiman","naagraj","doga"]  //array


//object
    let myobj={
    name:"aadi",
    age:22,
}

//function

const myfunction=function(){
console.log("hello world");
}

console.log(typeof myfunction);