const { MongoClient } = require("mongodb");
const CONNECTION = "mongodb+srv://sankar_mongo:Gl98BKgGNQUxS6ii@learning.vkfdzvo.mongodb.net/?appName=Learning"

const client = new MongoClient(CONNECTION)

async function run() {
try {
  await client.connect();
  console.log("Connected to Mongo Atlas");

  const db = client.db("testDB");
  const collection = db.collection("users");

  await collection.insertOne({name: "sankar", age:22})

  const users = await collection.find().toArray()

  console.log(users)
}finally{
  await client.close()
  console.log('connection closed')
}
}

run()
