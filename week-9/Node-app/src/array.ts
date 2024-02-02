// Given an array of positive integers as input, return the maximum value in the array

function maxval(arr:number[]):number{
    let max=-1;
     for(let i=0;i<arr.length;i++){
          if(arr[i]>max){
            max=arr[i];
          }
     }
     return max;
}

const ans =maxval([3,1,6,3,7])

console.log(ans);
