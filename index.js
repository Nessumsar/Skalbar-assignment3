var http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const fetch = require('node-fetch');


app.get('/get', (req, res) =>{
    fetch('https://jsonplaceholder.typicode.com/posts/12')
  .then((response) => response.json())
  .then((json) => res.send(json))
});

app.get('/covid', (req, res) => {
    fetch('https://api.covid19api.com/country/sweden/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-03-04T00:00:00Z')
    .then((response) => response.json())
    .then((json) => res.send(json))
})


app.get('/post', (req, res) =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body: JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
    .then((response) => response.json())
    .then((json) => res.send(json))
})

app.listen(port, () =>{
    console.log("starting server");
})

