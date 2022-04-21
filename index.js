console.log("working");

//Q1.Create one function with zero parameter having a console statement;

function zeropara(){
    console.log("hello i m Zero Parameter Function");
}

//Q2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b){
sum = a + b;
console.log(`Sum of ${a},${b} is ${sum}`);
}
sum(3,4);

//Q3.Create one arrow function

let arrow = (a,b)=>{
mul = a*b;
console.log(`multiplication by using arrow function is ${mul}`);
}
arrow(3,4);

//Q4.Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

console.log("output of this function is undefined");

//Q5.Print output: 
var x = 21;
girl ();
console.log(x) //outpot for this line is 21 
function girl() {
    console.log(x);
    var x = 20;
};

//Q6.Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };
//Reference error a is not defined 

//Q7.Write a function that accepts parameter n and returns factorial of n

function fact(n){
    let f=1;
    for(i=1 ;i<=n ; i++){
f=f*i;
    }
console.log(f);
}
fact(6);