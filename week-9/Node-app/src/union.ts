// let say we want to print the id of a user which can either be a number or string
type StringorNumber =number |string
function checkid (id:StringorNumber){
    console.log(id);
}

checkid("vishal");


// without the types we can achieve this
// function checkid (id:(number|string)){
//     console.log(id);
// }

// checkid(12345);