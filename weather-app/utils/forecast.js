const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=' longitude ' + ',' + longitude + '&units=f'

    request({  url, json: true }, (error, body) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast