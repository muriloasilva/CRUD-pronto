const express = require('express');

const server = expresss();

server.use(express.json());

const cafedamanha = ['Pão', 'Manteiga', 'Cafe'];

server.get ('/cafedamanha/:index', (req, res) => {
    const { index } = req.params;
    
    return res.jason(cafedamanha[index]);
});

server.get('/cafedamanha', (req, res) => {
    return res.json(cafedamanha);
});

server.post('/cafedamanha', (req, res) =>{
    const { name } = req.body;
    cafedamanha.push(name);
    
    return res.json(cafedamanha);
});

server.put('/cafedamanha/:index', (req, res) =>{
    const { index } = req.params;
    const { name } = req.body;

    cafedamanha[index] = name;

});

server.delete('/cafedamanha/:index', (req, res) => {
    const { index } = req.params;

    cafedamanha.splice(index, 1);
    return res.json( {message: "o cafedamanha foi deletado" });
});




server.listen(3000);
