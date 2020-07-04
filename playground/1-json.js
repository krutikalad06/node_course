const fs = require('fs')

const dataBufer = fs.readFileSync('1-json.json')
const dataJSON = dataBufer.toString()
const  user = JSON.parse(dataJSON)

user.name = 'krutika'
user.age = 22

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

