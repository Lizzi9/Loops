const num1 = 5;
const num2 = 3;

// exe1
// Write a JS code to print numbers from 1 to 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}
// exe 2
const arr2 = [13, 23, 12, 45, 22, 48, 66, 100];
// Write a JS code to print Even numbers in given array
for(let i = 0; i < arr2.length; i++){
    if(arr2[i]%2===0){
        console.log(arr2[i]);
    }
}

// exe 3
const arr4 = [2, 7, 4, 9, 6, 1, 6, 3];
// An array is special if every even index contains an even number and every odd index contains an odd number.
// Log true if an array is special, and false otherwise.
for (let i = 0; i < arr4.length; i++) {
    if(arr4[i]%2===i%2 ){
        console.log("true");
        break;
    }else{
        console.log("false");
        break;
    }
    
}
// exe 4
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
};
// You just returned home to find your mansion has been robbed! Given an object of the stolen items,
// log the total amount of the burglary (number).
// If nothing was robbed, return the string "Lucky you!".
let sum = 0;
for(let i in stolenItems){
    sum+=stolenItems[i];
}
console.log("Total amount of burglary :", sum);
if(sum===0){
    console.log("Lucky you!")
}
// exe 5
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// [3, 6, 12, 36]
// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
// write JS code that determines whether or not an array is a factor chain.
let isFactorChain="Factor Chain";
let arr8=[3,6,12,36];
for(let i = 1; i<arr8.length; i++){
    if(arr8[i]%arr8[i-1]!==0){
        isFactorChain="is not factor chain";
        break;
    }
}
console.log(isFactorChain);

// exe 6
const arr7 = ["###", "#*#", "###"];
// write JS code that logs true if an asterisk * is inside a box, and false otherwise.
let box="";

for(let i = 0; i < arr7.length; i++){
    box=arr7[i];
    if(box.includes("*")){
        console.log("True");
    }else{
        console.log("false");
    }
}

// exe 7
const mean7 = 12345;
// write JS code that logs the mean of all digits.
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer.
let mean=mean7;
let result=0;
let count=0;
while(mean/10!==0){
    count++;
    result+=mean%10; 
    mean=(mean-mean%10)/10;
}
console.log(result/count);
