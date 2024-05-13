import { Client, Query } from "pg";

const client = new Client({
   connectionString:"postgresql://username:password@ep-lucky-cake-ax3dwnk.host/db?sslmode=require"
});


async function CreateTodoTable(){
   try {
    await  client.connect();
    const res= await client.query(`
        CREATE  TABLE todos (
            id SERIAL PRIMARY KEY,
            title CHAR(256),
            description CHAR(256)
        )
     `)
       console.log(res);
   } catch (error) {
       console.log(error);
   }
}

CreateTodoTable();


async function findfromdb(){
    await client.connect();
    const res = await client.query(`
        SELECT * FROM todos
    `)
    console.log(res);
}

findfromdb();


async function insertdata(){
    try {
        await client.connect();
        const Insertquery =`
           INSERT INTO "todos"(title , description)
           VALUES('SELECT * FROM "todos" WHERE title=$1' ,'mai hu panja')
        `
    
        const res = await client.query(Insertquery);
        console.log(res);
        console.log("INSERTION SUCCESFULL");
    } catch (error) {
        console.error(error);
         console.log("INSERTION FAILED");
    }finally{
        await client.end();
    }
}

insertdata();


async function insertdata(title:string , description:string){  // this time add data with more security.
      try {
        await client.connect();
        const Insertquery = `
             INSERT INTO "todos"("title", "description")
             VALUES($1, $2);
        `
        const values =[title , description];
        const res = await client.query(Insertquery , values);
        console.log("INSERTION SUCCESSULLY");
        
      } catch (error) {
          console.log(error);
          console.log("Insertion fail");
      }
      finally{
       await client.end();
      }
}

insertdata('this is data' ,'secure data');

async function getdata(){
    try {
        await client.connect();
        const res = await client.query(`
              SELECT * FROM "todos" WHERE "title" = 'punjab';
          `);
        console.log(res);
        console.log("Data fetched Successfully");
    } catch (error) {
         console.error(error);
         console.log("getting data failed");
    } finally {
        client.end();
    }
}

getdata();


async function deletedata(){
    try {
        await client.connect();
    const res = await client.query(`
         DELETE FROM "todos"
     `)
     console.log("deleted Successfully");
     console.log(res);
    } catch (error) {
        console.log("Deleted failed");
        console.log(error);
    }finally{
        await client.end();
    }
}

deletedata();


async function insertdata(){
   try {
    await client.connect();
    const insertquery = `
      INSERT INTO "todos"("title" , "description")
      VALUES('My second todo' , 'this is my second  todo')
    `
    const res =await client.query(insertquery);
    console.log("data added successfully");
   } catch (error) {
      console.error(error);
      console.log("data added failed");
   }finally{
      await client.end();
   }
}

insertdata();

/////// LEARNING ABOUT THE RELATIONSHIPS


async function createuser(){
      try {
         await client.connect();
      const res = await client.query(`
           CREATE TABLE users(
              id  SERIAL PRIMARY KEY,
              username CHAR(50) UNIQUE,
              email VARCHAR(256) UNIQUE,
              password  VARCHAR(255),
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
           ) 
      `)
      console.log(res);
      console.log("Table created successfully");
      } catch (error) {
         console.error(error);
         console.log("Table not created");
      }finally{
         await client.end();
      }

}

createuser();


async function insertdata(username:string , email:string , password:string){
   try {
      await client.connect();
      const insertquery =`
         INSERT INTO users("username", "email", "password")
         VALUES($1,$2,$3)
      `
      const values =[username,email,password];
      await client.query(insertquery,values);
      console.log("users added success"); 
   } catch (error) {
       console.error(error);
       console.log("Insertion failed");
   }finally{
       await client.end();
   }
}

insertdata("vishal" ,"vishal@gmail.com" , "123456");




async function createaddress(){
      try {
         await client.connect();
      const res = await client.query(`
           CREATE TABLE address(
              id  SERIAL PRIMARY KEY,
              user_id INTEGER NOT NULL,
              city VARCHAR(256) UNIQUE,
              state  VARCHAR(255),
              pincode INTEGER,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
           ) 
      `)
      console.log(res);
      console.log("Table created successfully");
      } catch (error) {
         console.error(error);
         console.log("Table not created");
      }finally{
         await client.end();
      }

}

createaddress();


async function insertaddress(user_id:number,city:string, state:string, pincode:number){
   try {
            await client.connect();
            const insertquery =`
               INSERT INTO address("user_id","city", "state", "pincode")
               VALUES($1,$2,$3,$4)
            `
            const values =[user_id,city,state,pincode];
            await client.query(insertquery,values);
            console.log("users added success"); 
         } catch (error) {
             console.error(error);
             console.log("Insertion failed");
         }finally{
             await client.end();
         }
}

insertaddress(1,"kolkata" ,"WB",790099);


// LEarning about joins 


async function getjointdata(user_id:number){
   try {
      await client.connect();
      const query = `
          SELECT u.id, u.username, u.email, a.city, a.state, a.pincode
          FROM users u
          JOIN address a ON u.id = a.user_id
          WHERE u.id = $1
      `;
      const result = await client.query(query, [user_id]);
         console.log(result);
      if (result.rows.length > 0) {
          console.log('User and address found:', result.rows[0]);  //print the first address.
          return result.rows[0];
      } else {
          console.log('No user or address found with the given ID.');
          return null;
      }
  } catch (err) {
      console.error('Error during fetching user and address:', err);
      throw err;
  } finally {
      await client.end();
  }
}
getjointdata(1);

// Types of join
// 1. Inner Join
// 2. left join
// 3. right join
// 4. full join
