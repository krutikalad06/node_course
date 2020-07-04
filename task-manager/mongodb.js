//                           CRUD
//create(insert,insertOne) read(find,findOne) update(updateOne,updateMany) delete
const {MongoClient, ObjectID } = require('mongodb')
const connectionURL = 
'mongodb://2000000005:RtT8PWyr0r0KYF11gJEVCJxvUdSx5SXGgB5tAYnVcEzbldVtk0zoE0i0M6SAWkBLmOJrCV3CR30iFVXnA9zrgA==@2000000005.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=12'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
    return console.log('Unable to connect to database!')
} 
    const db = client.db(databaseName)
//     db.collection('users').deleteMany({
//         age: 21
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

db.collection('tasks').deleteOne({
    "description": "Clean the house"
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
})