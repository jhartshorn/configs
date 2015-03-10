//
// Forecast example
//

// Require the forecast module
var Forecast = require('../');

// Initialize with custom settings
var forecast = new Forecast({
  service: 'forecast.io',
  key: '62c69e1c09cce085de943103d0edbac5',
  units: 'celcius',
  cache: true,
  ttl: {
    minutes: 5
  }
});

// Retrieve weather information using coordinates (Sydney, Australia)
forecast.get([52.9074, 1.2565], function(err, result) {
  if(err) return console.dir(err);

//  console.log('Latitude: %s', result.latitude);
//  console.log('Longitude: %s', result.longitude);
//  console.log('Timezone: %s', result.timezone);
//  console.log();
//  console.log('Current Weather Conditions:');
//  console.log();
  console.log(
    ' %s, %s°C, %s% humidity',
    result.currently.summary,
    Math.round(parseFloat(result.currently.temperature, 10)),
    result.currently.humidity * 100
  );

});
