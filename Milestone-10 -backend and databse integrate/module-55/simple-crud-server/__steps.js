/**
 * Mongodb connection
 * -----------------
 * 1. create account
 * 2. create an user with password
 * 3. whitelist ip address
 * 4. database>connect>driver>Node>show all code
 * 5. change the password the uri
 *
 *
 * 1. create === post
 * 2. app.post('/users', (req,res)=>{} )
 * 3. make the async to use await inside
 * 4. access data from the body= req.body , make sure use middleware express.json()
 * 5. const result = await userCollection.insertOne(user)
 * 6. res.send(result)
 *
 *
 *
 *
 *
 * ------client----
 * 1. create fetch
 * 2. add second parameter as an object in fetch.
 * 3. provide method: "POST"
 * 4. headers: 'content-type':'application/json'
 * 5. body: JSON.stringify()
 *
 *
 *
 *
 *
 *
 *
 * --------READ---------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 3. res.send(result)
 *
 *
 *
 * ----delete---
 * 1. create app.delete('/users/:id',(req,res)=>{})
 * 2. add query = {_id: new ObjectId:{id}}
 * 3. result = await userCollection.deleteOne(query)
 * res.send(result)
 */
