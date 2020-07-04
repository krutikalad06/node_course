// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://2000000005:RtT8PWyr0r0KYF11gJEVCJxvUdSx5SXGgB5tAYnVcEzbldVtk0zoE0i0M6SAWkBLmOJrCV3CR30iFVXnA9zrgA==@2000000005.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=12'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })



//     db.collection('tasks').deleteOne({
//         description: "Renew inspection"
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// })


db.collection('tasks').insertMany([
    {
        name: "krutika",
        age: 21,
        email: "lad@example.com",
        passowrd: 'red@123'
    },{
       
        name: "jess",
        age: 20,
        email: "jess@example.com",
        passowrd: 'jess@123'
    },{
       
        name: "joe",
        age: 27,
        email: "joe@example.com",
        passowrd: 'joe@123'
    }
], (error, result) => {
    if (error) {
        return console.log('Unable to insert tasks!')
    }

    console.log(result.ops)
})
})