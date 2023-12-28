// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs');

function writeFunction(content){
    return new Promise(function(resolve,reject){
        fs.writeFile('a.txt',content,'utf-8',function(err){
            if(err){
                reject('Not able to write some error occur');
            }
            else{
                resolve('sucessfully write in file');
            }
        })
    })
}

async function main(){
    const content="HEllo I am added by async function"
    let p=await writeFunction(content);
    console.log(p);
}

main();