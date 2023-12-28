/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First Promise resolved");
      }, t * 1000);
    });
  }
  
  function wait2(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Second Promise resolved");
      }, t * 1000);
    });
  }
  
  function wait3(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Third Promise resolved");
      }, t * 1000);
    });
  }
  
  async  function calculateTime(t1, t2, t3) {
       const startTime =new Date().getTime();
         let p1= wait1(t1);
         let p2= wait2(t2);
         let p3= wait3(t3);

         await Promise.all([p1,p2,p3])
         let endTime=new Date().getTime();
         return endTime-startTime;

    // const startTime = Date.now();

    // const promise1 = wait1(t1);
    // const promise2 = wait2(t2);
    // const promise3 = wait3(t3);

    // return Promise.all([promise1, promise2, promise3])
    // .then(() => {
    //     // console.log(results);
    //     const endTime = Date.now();
    //     const timeTaken = endTime - startTime;
    //     return timeTaken;
    // })
  }


//  async function main(){
//     let p=await calculateTime(4,5,7);
//     console.log(p);
//  }
//  main();


module.exports = calculateTime;
