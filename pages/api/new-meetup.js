// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //expected fileds to get on incomming request body

    //const { title, image, address, description } = data;

    //store them in a database

    //Establish connection to Mongo DB
    const client = await MongoClient.connect(
      "mongodb+srv://admin:KbIRBR8Zdg19y3KW@cluster0.u8pwtsg.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    //inserting data to db
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    //Send back a response then

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
