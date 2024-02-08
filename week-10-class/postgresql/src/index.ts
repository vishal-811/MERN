// write a function to create a usertable in database.
import { Client } from 'pg'
require ('dotenv').config();

const password =process.env.SECRET_PASSWORD
const client = new Client({
  connectionString:('postgresql://vishalssharma811:0T3LfetZzyFo@ep-lucky-cake-a5x3dwnk.us-east-2.aws.neon.tech/neondb?sslmode=require')
})

create a user table.
async function createuser(){
    await client.connect();
    try {
       const createquery = `
           CREATE TABLE User (
              id SERIAL PRIMARY KEY,
              email VARCHAR(50) UNIQUE NOT NULL,
              firstName VARCHAR(255) NOT NULL,
              lastName VARCHAR(255) NOT NULL, \
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
           );
       `
       await client.query(createquery);
       console.log("table created successfully");
    } catch (error) {
        console.error(error);
    }finally{
        await client.end();  // close the client connection
    }
}

createuser();


// used to insert data in a databse.
// this way of inserting data in not secure, if instead of value we sent query in value than it will run that query and access our data.
async function insertData(){
    await client.connect();
    try {
      const insertquery = `
         INSERT INTO "User"(email,"firstName","lastName",password)
         VALUES('check@gmail.com' ,'test', 'testlast' ,'123456');   
      ` 
      // instead of directly passing values we should use $
       await client.query(insertquery);
       console.log("Insertion succesfully");
    } catch (error) {
        console.error(error);
    }finally{
      await  client.end(); 
    } 
}
 insertData();

// Access Data from the database

// async function getdata(){
//     await client.connect();
//     const res  =`SELECT * FROM 'User';`
//     console.log(res);
// }

// getdata();