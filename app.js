const express=require('express');

const app=express(); //init express

app.listen(3001, ()=>console.log('server started'));

app.get('/', (req, res)=>{
    console.log('hello from home page')
    res.send('<h1>Hello from backend</h1>');
})

let obj={
    name: 'Hemant'
}

app.get('/user', (req, res)=>{
    console.log('users');
    res.json(obj)
})