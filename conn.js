//Quelle: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
const { MongoClient } = require("mongodb");

const prompt = require("prompt-sync")();
let again = true;
let searchHistroy = [];

async function main() {
  const uri =
    "mongodb+srv://user:user123@la1304cluster.qbpc9c5.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    while (again === true) {
      const input = prompt("Search Googlio: ");
      const inputLowerCase = input.toLowerCase();
      const inputFinal =
        inputLowerCase.charAt(0).toUpperCase() + inputLowerCase.slice(1);
      await findOneListingName(client, inputFinal);
      again = await searchAgain();
      history(searchHistroy);
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function findOneListingName(client, nameOfListing) {
  const result = await client
    .db("daten")
    .collection("daten")
    .findOne({ name: nameOfListing });

  if (result) {
    console.log(`Ein Ergebnis für ${nameOfListing} gefunden:`);
    console.log("");
    console.log("=======Titel=======");
    console.log("");
    console.log(result.name);
    console.log("");
    console.log("=======Beschreibung=======");
    console.log("");
    console.log(result.description);
    console.log("");
    console.log("=======Link=======");
    console.log("");
    console.log(result.link);
    console.log("");
    console.log("");
    searchHistroy.push(result.name);
  } else {
    console.log(`Kein Eintrag gefunden: '${nameOfListing}'`);
  }
}

async function searchAgain() {
  const again = prompt("Möchten Sie nochmal suchen [y/n]: ");
  if (again == "y") {
    return true;
  } else {
    return false;
  }
}
async function history(searchHistroy) {
  const showHistory = prompt("Möchten Sie den Verlauf anzeigen [y/n]: ");
  if (showHistory == "y") {
    console.log(searchHistroy);
  } else {
  }
}
