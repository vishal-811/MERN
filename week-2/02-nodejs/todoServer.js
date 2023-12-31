/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const fs=require('fs');
  const express = require('express');
  const bodyParser = require('body-parser');
  
  const app = express();
  
  app.use(bodyParser.json());

   app.get('/todos' ,function(req,res){
        fs.readFile('todos.json','utf-8',function(err,data){
          if(err){
            res.json({msg:"Not able to read todos"})
          }
          // console.log(data);
          res.status(200).json(JSON.parse(data));
        })  
       
   })

   app.get('/todos/:id',function(req,res){
    const id=req.params.id;
      fs.readFile('todos.json','utf-8',function(err,data){
         if(err){
           res.status(404).json({msg:"Not able to fetch"});
         }
         const todos=JSON.parse(data);
          const todoId=todos.findIndex(todo => todo.id==id)
            if(todoId!=-1){
              res.status(200).json(todos[todoId]);
            }
            else{
              res.status(404).json({msg:"wrong input"})
            }
            })
          });
    
  app.post('/todos', function(req,res){
    const {title,description}=req.body;
         fs.readFile('todos.json','utf-8',function(err,data){
          if(err){
            res.json({msg:"something went wrong"});
          }
          else{
            let todoList=JSON.parse(data);
            const newtodo={
               id:todoList.length+1,
               title:title,
               description:description
            }

            todoList.push(newtodo);
            fs.writeFile('todos.json',JSON.stringify(todoList),'utf-8',function(err){
              if(err){
                throw err;
              }
              else{
                res.status(201).json({msg:"new todo added sucessfully"})
              }
            })
          }
  
         })
  });

  app.put('/todos/:id',function(req,res){
         const id=req.params.id;
         const {title,description}=req.body
          
         fs.readFile('todos.json','utf-8',function(err,data){
          if(err){
            throw err;
           }
           else{
              let todoList=JSON.parse(data);
              const todoIndex=todoList.findIndex(todo => todo.id==id)
              if(todoIndex!=-1){
              
                  
                  todoList[todoIndex]={
                    id:parseInt(id),
                     title:title,
                     description:description
                  };

                  fs.writeFile('todos.json',JSON.stringify(todoList),'utf-8',(err)=>{
                    if(err){
                       throw err;
                    }
                    else{
                      res.status(200).json({msg:"updated sucessfully"})
                    }
                })
             }
             else{
              res.status(404).json({msg:"not found!"})
             }       
                  
              }
           })
        });

        app.delete('/todos/:id',function(req,res){
           const id=req.params.id;

           fs.readFile('todos.json','utf-8',function(err,data){
             if(err){
              throw err;
             }
             else{
              const todosList=JSON.parse(data);
               const todoIndex=todosList.findIndex((todo)=> todo.id==id);
               if(todoIndex!=-1){
                // let updatedtodo=[];
                    const updatedtodo=todosList.filter(todo => todo.id!=id);

                    fs.writeFile('todos.json',JSON.stringify(updatedtodo),'utf-8',function(err){
                        if(err){
                          throw err;
                        }
                        else{
                          res.status(200).json({msg:"deleted successfully"})
                        }
                    })
               }
               else{
                res.status(404).json({msg:"Not found"})
               }

             }
           })
        });
 
app.get('*' ,function(req,res){
  res.status(404).json({msg:"Error 404 Not found"});
})
       

app.listen(3000);
  module.exports = app;