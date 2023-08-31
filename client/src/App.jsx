import React, { useEffect } from 'react'
import { styled , createGlobalStyle } from 'styled-components'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  scroll-behavior: smooth;
}
`
const Container = styled.div`
width: 100vw;
height: 100vh;
background-color:#000;
position: relative;
`
const TodoContainer = styled.div`
padding: 2rem;
`
const Title = styled.h2`
font-size: 2rem;
color:#14b8a6;
`
const Subtitle = styled.h3`
margin: 1rem 0;
padding: 1rem;
color: #14b8a6;
`
const Todo = styled.div`
width: 500px;
height: 3rem;
display: flex;
align-items: center;
background-color: #14b8a6;
padding: 0 1rem;
color: #fff;
border-radius: 10px;
margin: 1rem 0;
`
const Checkbox = styled.input`
margin-right: 2rem;
`
const TodoTask = styled.p`
width: 400px;
border: .5px solid rgba(0,0,0,0.5);
border: none;
`

const Span = styled.span`
position: absolute;
width: 3rem;
height : 3rem ;
border-radius: 50%;
bottom: 4rem;
right: 2rem;
display: flex;
justify-content: center;
align-items: center;
background-color: #14b8a6;
cursor: pointer;
`
const TodoAddTask = styled.div`
position: absolute;
bottom: 1rem;
left: 2rem;
width: 500px;
height: 400px;
padding: 1rem;
background-color: #f3f4f6;
border-radius: 10px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
`

const IconClose = styled(AiOutlineClose)`
position: absolute;
right: 1rem;
top: 1rem;
cursor: pointer;

`

const InputDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Input = styled.input`
padding: 1rem;
width: 80%;
height: 3rem;
display: flex;
margin: auto;
border-radius: 10px;
outline: none;
border: 2px solid #14b8a6;
transition: all ease-in-out 0.3s;
&:focus{
  border: 2px solid #0f766e;
  
}
`

const TitleTask = styled.h3`
text-align: center;
margin: 2rem 0;
color:#14b8a6;
`
const Button = styled.button`
margin: 5rem 0;
padding: 1rem;
width: 40%;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
border: 2px solid #14b8a6;
transition: all ease-in-out 0.3s;
color: #14b8a6;
cursor: pointer;
font-weight: 500;
&:hover{
  border: 2px solid rgba(0,0,0,0.8);
  
}
`


const App = () => {
   const [todo , setTodo] = useState([])
   const [task , setTask ] = useState(false)
   const [inputValue , setInputValue] = useState('')



   console.log(inputValue)

useEffect(()=> {
  getTodo()
},[])


const API_BASE ="http://127.0.0.1:5174"; 

const getTodo = () => {
   fetch(API_BASE + ("/get"))
  .then((res)=>res.json())
  .then((data)=>setTodo(data))
  .catch(error=>console.log(error))
}

console.log(todo)


const deleteTodo = async (id) => {
  const data = await fetch(API_BASE + "/deletetodo/" + id ,{
    method : "DELETE"
  }).then((res)=>res.json())

  setTodo(todo.filter(item=>item._id !== data._id))
  

} 
  
  return (
    <>
     <GlobalStyle />
     <Container>
       <TodoContainer>
       <Title>Welcome ,</Title>
         <Subtitle>Your tasks</Subtitle>
         {todo.map(({_id,text,complete})=>{
          return (
            <Todo key={_id}>
              <Checkbox type='checkbox'/>
              <TodoTask>{text}</TodoTask>
                <AiOutlineClose style={{cursor:'pointer'}} onClick={()=>deleteTodo(_id)} />    
            </Todo>
          )
         })}
     



       </TodoContainer>
       <Span onClick={()=>setTask(!task)}>
         <AiOutlinePlus size={30} color='#fff'/>
       </Span>
     </Container>
     
     <TodoAddTask style={{display: task ? 'block' : 'none'}}>
        <IconClose color='#000' onClick={()=>setTask(false)} />
       <TitleTask>Add Task</TitleTask>
       <InputDiv>
       <Input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  type="text" placeholder='add a task'/>
       <Button>Create task</Button>
       </InputDiv>
     </TodoAddTask>

    </>
  )
}

export default App