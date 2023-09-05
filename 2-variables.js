// variables

var a = 5 // Function scoped
console.log(a)



let b = 10  // braces scoped
console.log(b)



const c = 15  // braces scoped
console.log(c)

{
    var z = 1555;
}

{
    let x = 65965;
}

console.log(z);
console.log(x);


let num = 20

console.log('number is', num)

console.log(`number is ${num}`)