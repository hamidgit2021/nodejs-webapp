const express = require('express');

const app = express();

const path = require('path');

app.get('/', (req,res) => {
	      
	       res.sendFile(path.join(__dirname+'/index.html'));
});


app.get('/about', (req,res) => {

	res.sendFile(path.join(__dirname+'/about.html'));
});


app.get('/contact', (req,res) => {

	res.sendFile(path.join(__dirname+'/contact.html'));
});

app.get('/images', (req,res) => {
	res.sendFile(path.join(__dirname+'/images.png'));
});

app.listen(3000, () => {

	       console.log('Listening on port 3000');
});