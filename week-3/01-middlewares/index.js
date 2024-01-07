// we are learning about fetch .
// fetch is a asynchronous function that is used to fetch data froom a server.
// fetch generally makes a get request . if we want to make a particular method synatx than the syntax changes a bit.
// fetch("https://dummy/jhbcb" ,{
//     method:"POST"
// })

async function getDataFromServer(){
    const response=await fetch("https://fakerapi.it/person")
    const data =await response.json();
    console.log(data);
}