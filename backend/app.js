const express = require('express')
const app = express()

const{MongoClient} = require('mongodb')
let db
let result
const port = 9000
async function dataCollection(){
    try{
        const filter = { Sets: { $exists: true } };

    const client = await MongoClient.connect(
    'mongodb+srv://ialsanto:pZA9lGjyKDkqqgvy@customers.q2nfot5.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db('Customers').collection('Customers');
    const cursor = coll.find(filter);
    result = await cursor.toArray(); 
    await client.close();
    }
    catch(err){
        console.log(err)
    }
}
app.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
})
//routes
app.get('/test',(req,res)=>{
    dataCollection()
    res.json(result)
})

