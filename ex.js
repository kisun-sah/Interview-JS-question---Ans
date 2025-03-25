//write a factorial function using for loop 

let factorial = 1;
for(let i = 5; i>0; i--){
    factorial = factorial* i;

   
    

}
console.log(factorial);

// write a nested loop to print a 3x3 gride number 1 to 9

let hole = 1;
for(let i =1; i<4; i++){
    let str = " ";
    for(let j=1; j<4; j++){
        str += hole + " ";
        hole++;
        
    }
    console.log(str);
    
}


// write a function Use a loop to reverse a given  ,  array [1,2,3,4,5]. 

let arr = [1,2,3,4,5,6,7,8,9,0];
for(let i=0; i< Math.floor(arr.length/2); i++){

    let temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length-1-i] = temp;

}
console.log(arr);

// write a while loop that logs numbers from 1 to 100 divisible by .

let a = 1 ;

while (a <= 100) {
    if(a% 5 === 0){
        console.log(a);
    }
   
    a++;
    
    
}

// Use a for... in loop that to iterate over an object and log its keys.

let obj ={
    name : "kisu",
    email : "kisu123@gmail.com",
    age : "25"
}
for(let key in obj){
    console.log(key);
    
}






//................................{Array 10 question ans}.................................................................

// Create an array of your top 5 favorite moives and log it.

let arr1 = ["sunday", "surya", "rcb", "kisu", "monnlay"];

arr1.forEach((item) => {
    console.log(item);
    
})

// for(let i =0; i< arr1.length; i++){
//     console.log(arr1[i]);
    
// }

// Find and log the second element of an array .

let arr2 = [1,2,3,4,5,6,7,8,9,0];
console.log(arr2[1]);


// add two new elements to the start of an array using .unshift()method.

let arr3 = [3,4,5,6,7,8,9,0];
arr3.unshift(1,2);
console.log(arr3);


// Remove the last element of an array using .pop() method.

let arr4 = [3,4,5,6,7,8,9,0];
arr4.pop();
console.log(arr4);


// Use .slice() to extract the first three elements of an array .

let arr5 = [1,2,3,4,5,6];
let x = arr5.slice(0,3);
console.log(x);


// find the index of a specific element in an array using .indexof() method.

let arr6 = [3,4,5,6,7,8,9,0];
let index = arr6.indexOf(5);
console.log(index);//2

//Check if a value exists in an array using .includes()method.

let arr7 = [1,2,3,4,5,6,7,8,9,0];
let check = arr7.includes(5);
console.log(check)//true;


// Combine two arrays using .concat() mthods.


let arr8 = [1,2,3,4,5,6,7,8,9,0];
let arr9 = [11,12,13,14];
let z = arr8.concat(arr9);
console.log(z);

// Sort an array of numbers [5 ,2,9,1] in ascending order.

let arr10 = [5 ,2,9,1] ;

// arr10.sort((a ,b )=> a-b);

for(let j=0;  j<arr10.length; j++){
    for(let i=0; i<arr10.length-1; i++ ){
        if(arr10[i]>arr10[i+1]){
            let temp = arr10[i];
            arr10[i]= arr10[i+1];
            arr10[i+1]= temp;
        }
      
    }

}
console.log(arr10);














































