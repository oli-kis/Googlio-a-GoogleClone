//Quelle: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
const { MongoClient } = require("mongodb");
const express = require("express");
let dbContext = [];
const app = express();
const port = 8383;

app.use(express.static("public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Origin"
  );
  next();
});

async function main() {
  const uri =
    "mongodb+srv://user:user123@la1304cluster.qbpc9c5.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    const database = client.db("daten");
    const collection = database.collection("daten");

    const cursor = collection.find();

    await cursor.forEach((document) => {
      dbContext.push(document);
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

app.get("/", (req, res) => {
  res.send(dbContext);
});

app.listen(port, () => console.log("Server started on port: " + port));
