// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://2000000005:RtT8PWyr0r0KYF11gJEVCJxvUdSx5SXGgB5tAYnVcEzbldVtk0zoE0i0M6SAWkBLmOJrCV3CR30iFVXnA9zrgA==@2000000005.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=12'

const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        }, {
            name: 'Gunther',
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    })

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },{
            description: 'Renew inspection',
            completed: false
        },{
            description: 'Pot plants',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }

        console.log(result.ops)
    })
})