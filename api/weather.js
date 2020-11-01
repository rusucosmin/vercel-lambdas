var weather = require('openweather-apis');

module.exports = (request, response) => {
  const city = request.query.city  || 'Cluj-Napoca'
  weather.setCity(city);

  const units = request.query.units || 'imperial'
  weather.setUnits(units);

  weather.setAPPID(process.env.WEATHER_API_KEY);

  weather.getAllWeather(function(err, JSONObj){
    // TODO(cosmin): Make pretty...
    response.json(JSONObj);
  });
}
