import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
 
interface user{
    username:string
    email :string,
    password:string
}

async function insertapplicants({username , email , password}:user){
      const res = await prisma.applicants.create({
         data:{
            username,
            email,
            password
         }
      })

      console.log(res);
      console.log("Applicants details added successfully");
}

insertapplicants({username:"Fardin", email:"fardin@gmail.com", password:"123356"});


async function getdata(id:number){
    const res = await prisma.applicants.findFirst({
        where:{
            id
        }
    })
    console.log(res);
    console.log("data fetched successfully");
}

getdata(2);

 interface updateprofile{
    password:string
    username:string
 }
async function updatedata(id:number,{
    password,
    username
}:updateprofile){
    const res = await prisma.applicants.update({
        where:{id},
        data:{
            username,
            password
        }
    })
    console.log(res);
    console.log("Profile updated Successfully");
}

updatedata(2,{password:"123456" ,username:"Atul sharma"});

async function deleteprofile(id:number){
    const  res=await prisma.applicants.delete({
        where:{id}
    })
    console.log("Deleted Successfully");
} 

deleteprofile(2);



// Add todos 
  interface todo{
     title:string,
     description:string
  }
async function insertTodos(id:number,{title,description}:todo){
       const res = await prisma.todos.create({
         data:{
            title,
            description,
             userId:id
         }
       })
}
insertTodos(1,{title:"first todo" ,description:"This is my first todo"});



// Relationship in Prisma like how we can relate two tables with each other
// We have 4 types of relationship 
// ONE -TO -ONE RELATIONSHIP
// ONE TO MANY RELATIONSHIP
// MANY TO ONE 
// MANY TO MANY

async function gettodos(id:number){
    const res = await prisma.todos.findMany({
        where:{id},
        select:{
            title :true,
            description :true,
             user :true
        }
    })
    console.log(res);
    console.log("Todos fetched successfully")
}
gettodos(1);