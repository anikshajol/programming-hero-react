const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()


const port = process.env.PORT || 5000

// middleware

app.use(cors())
app.use(express.json())




const uri = "mongodb+srv://shajolanik:cx8QDWISwcJE5V5m@cluster0.jgojmkc.mongodb.net/?retryWrites=true&w=majority";

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

    const database = client.db("usersDB");
    const userCollection = database.collection("users")

    app.post('/users', async(req,res)=>{
        const user = req.body;
        console.log("new user", user);
        const result = await userCollection.insertOne(user)
        res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);




app.get('/',(req,res)=>{
    res.send('Hello crud server')
})


app.listen(port,()=>{
    console.log(`crud server is runnig ${port}`);
})



// middleware

