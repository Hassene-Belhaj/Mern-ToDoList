const mongoose = require('mongoose')

 

const Todo = mongoose.model('Todo' , {
    text : {
        type : String,
        required : true,
    } ,
    complete : {
      type: Boolean ,
      default : false 
    } ,
    timestamp : {
        type: String,
        default : Date.now()
    }
})

module.exports = Todo