// write a function to create a usertable in database.
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const password = process.env.SECRET_PASSWORD;
const connectionString = `postgresql://vishalssharma811:${password}@ep-lucky-cake-a5x3dwnk.us-east-2.aws.neon.tech/neondb?sslmode=require`;

const client = new Client({
  connectionString: connectionString
});


// create a user table.

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



// // Access Data from the database
async function getdata() {
  try {
      await client.connect();
      const res = await client.query('SELECT * FROM "User" WHERE "lastName"=\'sharma\';');
      console.log(res.rows);
  } catch (err) {
      console.error('Error executing query:', err);
  } finally {
      await client.end();
  }
}

getdata();


// // Inserting data with the query (SQL INJECTION)

async function insertData(){
    try {
       await client.connect();
      //  const insertquery =`
      //      INSERT INTO "User"(email,"firstName","lastName", password) VALUES ('SELECT * FROM "User" ,"vishal12","sharma1", "123456"')
      //  `
      const insertquery =`
    INSERT INTO "User"(email,"firstName","lastName", password) VALUES ('SELECT * FROM "User"' ,"vishal12","sharma1", "123456")
`;

       const res  =await client.query(insertquery);
       console.log("insertion successfull" ,res);
    } catch (error) {
      console.error(error);
    }finally{
         await client.end();
    }
}

insertData();


// Inserting data with the more secure way...

async function insertdata(email:string,firstName:string,lastName:string,password:string|number){
  try {
    await client.connect();
  const insertquery = `
      INSERT INTO "User"(email ,"firstName", "lastName" ,password) VALUES($1,$2,$3,$4);
  `;
  const values =[email,firstName,lastName,password];
  const res =await client.query(insertquery,values);
  console.log("Insertion successfull");
  } catch (error) {
      console.error(error);
  }finally{
       client.end();
  }

 }

 insertdata('example@example.com', 'John', 'Doe',123456);

// Secure way to get data 


async function getdata(email:string){
    try {
      await client.connect();

    const getquery ='SELECT * FROM "User" WHERE email=$1';
    const values =[email];
    const res =await client.query(getquery,values);
     if(res.rows.length>0){
      console.log(res.rows[0]);
     }
     else{
      console.log("user not found");
     }
    } catch (error) {
        console.error(error);
    }finally{
      await client.end();
    }
}

getdata("example@example.com");