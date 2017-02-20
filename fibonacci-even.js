/* Instruction : 
Print the sum of all even members of fibonacci series. Max : 4 million (4000000) */

function fibonacci (){
var a = 1;
var b = 1;
var sum = 0;
var current;
for (i=0;i<100;i++){
   if (b % 2 == 0 && b < 4000000){
    sum = sum + b;
    console.log('sum is : '+sum);
  }
  current = b; 
  b = b+a;
  a = current;
}
}

fibonacci();
