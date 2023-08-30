const express = require('express');

const cors = require('cors');

require('./config/connect');
const Todo = require('./model/Todo') ;

const app = express();

app.use(express.json());
app.use(cors());

app.listen("5174" , ()=>console.log("server is ok") );


app.get( '/' , (req , res) => {
    res.send('server is running');
})



app.get( '/todos' , async (req ,res)=> {
    const todos = await Todo.find();
    res.json(todos);
})


app.post( '/new' , async (req , res)=> {
    const {text} = req.body
    const newtodo = await new Todo({
        text : text
    })
  await newtodo.save()
  return res.json({newtodo})
})
