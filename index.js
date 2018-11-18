// Import express framework and extensions
const express = require('express');
const extensions = require('./extensions');

// Define port to listen at
const port = 3000;

// Open express module
const app = express();

// Define get request from browser
app.get('/', function (request, response) {
    const nameQueryParam = request.query['name'];

    const body = `
        <h1>Hello ${nameQueryParam}</h1>
    `;
    
    const page = extensions.HtmlCoreTemplate(body, 'hello world');
    
    response.type('html');
    response.send(page);
});

app.get('/pic', function (request, response) {
    
    const picLink = 'https://avatars0.githubusercontent.com/u/3408281?s=460&v=4';

    const body = `
        <img src="${picLink}"></img>
    `;
    
    const page = extensions.HtmlCoreTemplate(body, 'hello world');
    
    response.type('html');
    response.send(page);
});

app.get('/json', function(request, response) {
    const nameQueryParam = request.query['name'];

    const responseModel = {
        name: nameQueryParam
    };

    response.type('application/json');
    response.send(JSON.stringify(responseModel));
});

// Bind express to listen requests
app.listen(
    port,
    function() {
        console.log(`Example app started at ${port} port`);
    }
);
