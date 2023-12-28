//  ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` 

const { error } = require('console');
const fs = require('fs');

function Read(){
    return new Promise(function(resolve,reject){
        fs.readFile('a.txt','utf-8',function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

function removeSpace(content){
    return new Promise(function(resolve,reject){
        const string=content;
        const newString = content.replace(/\s{2,}/g, ' ').trim() 
         if(newString!=string){
            resolve(newString);
         }
         else{
            reject('Not able to remove spaces');
         }
    })
}

function write(content){
    return new Promise((resolve, reject) => {
        fs.writeFile('b.txt',content,'utf-8',function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve();
            }
        })
    })
}

Read()
.then(function(data){
    console.log(data);
    return data;
})
.then(function(content){
    const string= removeSpace(content);
    console.log("Remove spaces sucessfully");
    return string;
    
   
})
.then(function(string){
      write(string);
     console.log("write sucessfully");
}) 
.catch(function(err){
    console.log(err.message);
})
    //here we use use promise chaining , we can also use promise all and make our function async and use await.
    
