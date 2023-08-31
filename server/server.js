const express = require('express');

const cors = require('cors');

require('./config/connect');

const Todo = require('./model/todo');

const app = express () ;    

app.use(express.json()) ;
app.use(cors()) ;

app.listen("5174" , () => console.log('server is running'))


app.get('/get' , async (req,res) => {
    try {
        const todo = await Todo.find()
        res.json(todo)
        
    } catch (error) {
        res.send(error)
    }
})

app.post('/newtodo' , async (req,res) => {
    try {
        const {text} = req.body
   const todo  = await new Todo({
        text : text
    })
    await todo.save()
    return res.json(todo)
    } catch (error) {
        res.send(error)
    }

})

app.delete('/deletetodo/:id' , async (req ,res) => {
    try {
    const id = req.params.id
    const deleted = await Todo.findOneAndDelete({_id:id})
    res.json(deleted) 
    } catch (error) {
      res.send(error)  
    }
   
}) 

app.put('/complete/:id' , async(req , res) => {
    try {
      const id = req.params.id
      const todo = await Todo.findById({_id : id})
      todo.complete = !todo.complete
      todo.save()
      res.send(todo)  
    } catch (error) {
        res.send(error)     
    }
     
})