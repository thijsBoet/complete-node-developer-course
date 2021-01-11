// CRUD Create Read Update Delete

const { MongoClient, ObjectID } = require("mongodb");
const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to DB!");
    }

    const db = client.db(databaseName);

    // CREATE

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Bjorn",
    //     age: 39,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log(error);
    //     }

    //     console.log(result.ops);
    //     return;
    //   }
    // );

    // db.collection("tasks").insertMany([
    //   {
    //     description: "Bake bread",
    //     completed: true
    //   }, {
    //     description: "Assemble new PC",
    //     completed: false
    //   }, {
    //     description: "Buy new PC hardware",
    //     completed: true
    //   }
    // ], (error, result) => {
    //     if (error) {
    //       return console.log("Unable to complete insertion into DB: ", error)
    //     }
    //     console.log(result.ops)
    // })

    // READ

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5ff88c9030fd353fd44c787f"), name: "Matthijs", age: 27 },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch user: ", error);
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users").find({ age: 27 }).toArray((error, users) => {
    //   console.log(users)
    // })

    // UPDATE

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5ff990edc625db1c585a1c87"),
    //     },
    //     {
    //       $set: {
    //         name: "Hvitserk",
    //         age: 37
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("5ff99171cc35fc4450bacdde"),
    //   },
    //   {
    //     $inc: {
    //       age: 1,
    //     },
    //   }
    // )
    //   .then((result) => {
    //   console.log(result)
    //   }).catch((error) => {
    //   console.log(error)
    //   });

    // db.collection("tasks").updateMany({
    //   completed: false
    // }, {
    //     $set: {
    //     completed: true
    //   }
    // }).then((result) => {
    //   console.log(result)
    // }).catch((error) => {
    //   console.log(error)
    // });

    // DELETE

    // db.collection("users")
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    
    // db.collection("users").deleteOne({
    //   name: "Ivar",
    // }).then((result) => {
    //   console.log(result)
    // }).catch((error) => {
    //   console.log(error)
    // });
  }
);
