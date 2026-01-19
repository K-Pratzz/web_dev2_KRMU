//reverse the array by using push and pop method
let arr=[1,2,3,4,5];
let rev=[];
while(arr.length>0){
    let e=arr.pop();
    rev.push(e);
}
//console.log(rev);

//remove all negative numbers from an array

let array=[10,-1,23,-7,0,5,-4,8,22,24,-67];
let newarr=array.filter((num)=> num>=0);
//console.log(newarr);

let rr1=[];

while(array.length>0){
    let u=array.shift();
    if(u>=0){
        rr1.push(u);
    }
}
//console.log(rr1);

//check if an array is palindrome or not
function p(){
    let a=[1,2,1];
    let b=[...a];
    let revv=[];

    while(a.length>0){
        revv.push(a.pop());
    }
    for(let i=0;i<b.length;i++){
        if(b[i]!==revv[i]){
            return "not a palindrome";
        }
    }
    return "palindrome";
}
console.log(p());

for(let a=0;a<5;a++){
    setTimeout(()=>{
        console.log(a);
    },5000)
}
//use var instead of let

//remove duplicates elements from an array
let arr1=[1,2,1,3,4,2,5,6,7,4,72,5];
let set=new Set(arr1);
arr1=[...set];
//console.log(arr1);

let unique=[];
while(arr1.length>0){
    let current=arr1.shift();
    if(!unique.includes(current)){
        unique.push(current);
    }
}
console.log(unique);

//move all zeroes to the end of an array

let arr2=[0,1,3,0,5,7,0,9,0,2];
let nonZero=[];
let count=0;
while(arr2.length>0){
    if(arr2[0]===0){
        count++;
        arr2.shift();
    }else{
        nonZero.push(arr2.shift());
    }
}
for(let i=0;i<count;i++){
    nonZero.push(0);
}
console.log(nonZero);

//undo/redo simulation 


