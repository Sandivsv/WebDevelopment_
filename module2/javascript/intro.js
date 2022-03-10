console.log("Hello dost, This is the first program of JS");

// variables

let a=10;
console.log(a);

let b='and';
console.log(b);

let bl=true;
console.log(bl);

//  for loop
for(let i=0;i<5;i++){
    console.log(i);
}

// while loop
let j=5;
while(j>0){
    console.log(j);
    j--;
}

// is prime 
let n=37
flag=0;
for(let i=2;i<n;i++){
    if(n%i==0){
        flag=1;
        break;
    }
}
if(flag==1){
    console.log('Not prime number');
}
else{
    console.log('prime number');
}