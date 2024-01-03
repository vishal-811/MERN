const express=require('express');
const app=express();

const port=3000;
app.use(express.json());

// inmemory db.
let books=[{
  id:1 ,bookName:"Maths" , author:"issac"
},{
  id:2 ,bookName:"science" ,author:"newton"
}]
//  give us the list of all books
app.get('/books' ,function(req,res){
      res.status(200).json(books);
})

// get book from  a specific id 
app.get('/books/:id',function(req,res){
  const bookid=parseInt(req.params.id);
 
  let book="";
    for(let i=0;i<books.length;i++){
        if(books[i].id==bookid){
         book =books[i].bookName;
          break;
        }
    }
    if(book==""){
      res.status(500).json({msg:"No book available for this id"})
    }
    else{
      res.status(200).json({book});
    }
})
  
// if we write a wrong route .
app.get('*' ,function(req,res){
  res.status(404).json({msg:"not found!"})
})

//  used to add new books
app.post('/books',function(req,res){
    const {bookName ,author} =req.body;

    books.push({id:books.length+1 ,bookName ,author});

    res.json({msg:"book added sucessfully"})
})

// used to update existing book has some bugs
app.put('/books/:id' ,function(req,res){
     const bookid=parseInt(req.params.id)
      const {bookName ,author}=req.body;

      const index=books.findIndex((book)=> book.id==bookid)

      if(index==-1){
         res.status(404).json({msg:"book not found"})
      }
      else{
          books[bookid]={id:bookid ,bookName:bookName ,author:author}
        res.status(202).json({msg:"updated sucessfully"})
      }
       
})

// delete books of given id
app.delete('/books/:id' ,function(req,res){
  
  let newBooks=[];
  
    const bookId=parseInt(req.params.id)
    for(let i=0;i<books.length;i++){
      if(bookId!=books[i].id){
          newBooks.push({id:books[i].id ,bookName:books[i].bookName , author:books[i].author});
      }
    }
   books=newBooks;
    res.status(204).json({msg:"deleted sucessfully"})
      
})

app.listen(port);