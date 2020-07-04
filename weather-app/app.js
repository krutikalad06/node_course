const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
}else{
    
geocode('address', (error, { latitude, longitude, location} =  {} )=>{
    if (error) {
        return console.log(error)
    }
  
    forecast(latitude, longitude, (error, forecastdata) => {
        if (error) {
            return console.log(error)
        }
        console.log(location0)
        console.log(forecastData)
})
  })
}

console.log(process.argv)

geocode('address', (error, data)=>{
    if (error) {
        return console.log(error)
    }
  
    forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if (error) {
            return console.log(error)
        }

        console.log(data.location0)
        console.log(forecastData)
        
})
  })