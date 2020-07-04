require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5efadc4f0f0c2d252d8c89cb').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=> {
    const task = await Task.findByIdAndDelete (id)
    const count = await Task.countDocuments({ completed: false})
    return count 
}

deleteTaskAndCount('5efadc66854edd2545fa18f2', true).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})