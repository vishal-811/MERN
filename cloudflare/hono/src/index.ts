import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any ,next:any){
      if(c.req.header('Authorization')){
           //Do some validations
           next();
      }
      else{
         return c.text("You don't have permisssion to access this!")
      }
}

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
