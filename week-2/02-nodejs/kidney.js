const express=require('express')
const app= express();

const user=[{
     name:"john",
      
     kidney:[{
        healthy:false,
        
     },
     {
        healthy:false,
        
     },
     {
        healthy:false,
        
     }]

}]
 app.use(express.json());

app.get('/' , function(req,res){
    const johnkidneys =user[0].kidney;
    const numberOfKidneys=johnkidneys.length;
    let healthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnkidneys[i].healthy){
            // console.log("mai helathy hu");
            healthyKidneys=healthyKidneys+1;
        }
    }
    const unhealthyKidneys=numberOfKidneys-healthyKidneys;
 
    res.json({
            numberOfKidneys,
            healthyKidneys,
            unhealthyKidneys
    })
})


app.post('/',function(req,res){
     let isHealthy=req.body.isHealthy;
    //  console.log(isHealthy);
     user[0].kidney.push({healthy:isHealthy});
     
     res.json({
        msg:"done"
     })
})

app.put('/',function(req,res){
    for(let i=0;i<user[0].kidney.length;i++){
        if(!user[0].kidney[i].healthy){
            user[0].kidney[i]={healthy:true};
        }
    }

    res.json({msg:"seems fine"})
})


app.delete('/',function(req,res){
    const newKidneys=[];
    for(let i=0;i<user[0].kidney.length;i++){
        if(user[0].kidney[i].healthy){
            newKidneys.push({healthy:true});
        }
    }
    user[0].kidney=newKidneys;

    res.json({
        msg:"Deleted succesfully",
    })
})


app.listen(3000);
