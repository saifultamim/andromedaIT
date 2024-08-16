
const express = require('express')
const app = express()
const port = process.env.PORT | 5000
const cors=require('cors')
const cookeparser=require('cookie-parser')
const jwt = require('jsonwebtoken');
require('dotenv').config();
app.use(express.json())
app.use(cookeparser())
app.use(cors(
  {
    origin:['http://localhost:5173'], 
    credentials:true
}
))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//=========================================================

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://andromedaIT:I9h7iOSwTx0mUSTa@cluster0.qg0rmqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const userMessage= await client.db('andromedaIT').collection('userMessage')
    const adminPanelCheck= await client.db('andromedaIT').collection('adminPanelCheck')
    const adminCareer = await client.db('andromedaIT').collection('adminCareer')
    const adminJobPost = await client.db('andromedaIT').collection('adminCareer') 

app.post('/jwt',async(req,res)=>{  
  const userInfo = req.body
  const token = jwt.sign({
    data: userInfo
  }, `${process.env.secret}`, { expiresIn: '1h' });  
  res.cookie('token', token, { 
    httpOnly: true, 
    secure: true, 
    sameSite:'none'
   });
  res.send({
    success:true,
    token:token
  })
})


app.post('/logout',async(req,res)=>{  
  const userInfo = req.body
  const token = jwt.sign({
    data: userInfo
  }, `${process.env.lsecret}`, { expiresIn: '1h' });  
  res.cookie('token', token, { 
    httpOnly: true, 
    secure: true, 
    sameSite:'none'
   });
  res.send({
    success:false,
    token:token
  })
})

app.get('/jwt',async(req,res)=>{
  try{
         const token=await req.cookies.token
     const adminPanelChecks=await adminPanelCheck.findOne()
     const adminEmailS = adminPanelChecks.email
     const adminPasswordS = adminPanelChecks.password 
     const adminConfirmPasswordS = adminPanelChecks.confirmPassword
 jwt.verify(token,`${process.env.secret}`,(err,decode)=>{
    if(err){
        return res.send({message:'token is error'})
    }
    const adminEmailC = decode.data.email
    const adminPasswordC = parseInt(decode.data.password)
    const adminConfirmPasswordC = parseInt(decode.data.cpassword) 
    if( adminEmailC === adminEmailS && adminPasswordC == adminPasswordS && adminConfirmPasswordC == adminConfirmPasswordS ){
      res.send({
        success:true
      })
  }
 else{
  res.send({
    success:false
  })
 }  
})
}
  catch(err){
    res.send({success:false})
  }
})

    app.post('/userMessage',async(req,res)=>{
      const user=req.body
      user.chat = false
      user.time = new Date()
      const userMessages=await userMessage.insertOne(user)
      res.send(userMessages)
     })

     app.put('/userMessage/:id',async(req,res)=>{
      const id=req.params.id
        const query={_id : new ObjectId(id)}
        const options={upsert:true}
        const updateUser={
            $set:{    
               chat:true
            }
        } 
       const message = await userMessage.updateOne(query,updateUser,options)
       //const findUser = await userMessage.findOne(query)
        res.send(message)
     })
 

     app.delete('/userMessage/:id',async(req,res)=>{ 
      const id=req.params.id
      const query={ _id : new ObjectId(id) }
      const result=await userMessage.deleteOne(query)
      res.send(result)
    })



     app.get('/userMessage',async(req,res)=>{
      const userMessages=await userMessage.find().toArray()
      res.send(userMessages)
     })



     app.post('/adminPanelCheck',async(req,res)=>{
     const adminEmailC = req.body.email
     const adminPasswordC = req.body.password
     const adminConfirmPasswordC = req.body.confirmPassword
      const adminPanelChecks=await adminPanelCheck.findOne()
      const adminEmailS = adminPanelChecks.email
      const adminPasswordS = adminPanelChecks.password 
      const adminConfirmPasswordS = adminPanelChecks.confirmPassword
      if( adminEmailC === adminEmailS && adminPasswordC == adminPasswordS && adminConfirmPasswordC == adminConfirmPasswordS ){
          res.send({
            data:true
          })
      }
     else{
      res.send({
        data:false
      })
     }
     })
     app.post('/adminCareer',async(req,res)=>{
      const adminUser=req.body
      const adminCareers = await adminCareer.insertOne(adminUser)
      res.send(adminCareers)
     })
     app.get('/adminCareer',async(req,res)=>{
      const adminCareers = await adminCareer.find().toArray()
      res.send(adminCareers)
     })
     app.get('/userCareerData/:id',async(req,res)=>{ 
      const id=req.params.id
      const query={ _id : new ObjectId(id) }
      const result=await adminCareer.findOne(query)
      res.send(result)
    })
    app.get('/adminJobPost',async(req,res)=>{ 
      const result = await adminJobPost.find().toArray()
      console.log('hello ',result)
     res.send(result)
     
    })
    app.delete('/adminJobPost/:id',async(req,res)=>{ 
      const id=req.params.id
      const query={ _id : new ObjectId(id) }
      const result=await adminJobPost.deleteOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch(err){
   
 } 
  finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

//=========================================================

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})