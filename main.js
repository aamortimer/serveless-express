const serverless = require('serverless-http');
const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/weather/:query', (req, res) => {
	const fetchWeather = query =>
		fetch(`https://www.metaweather.com/api/location/search/?query=${query}`)
		.then(response => response.json())
		.then(response => response[0])

	const query = req.params.query;
	fetchWeather(query).then(response => res.send(response));
});

//app.listen(4000);
module.exports.handler = serverless(app);
