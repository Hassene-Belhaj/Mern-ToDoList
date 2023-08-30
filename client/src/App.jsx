import React from 'react'
import { styled , createGlobalStyle } from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
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
background-color:#fff;
position: relative;
`
const TodoContainer = styled.div`
padding: 2rem;
`
const Title = styled.h2`
font-size: 2rem;
`
const Subtitle = styled.h3`
margin: 1rem 0;
padding: 1rem;
`
const Todo = styled.div`
width: 500px;
height: 3rem;
display: flex;
align-items: center;
background-color: #000;
padding: 0 1rem;
color: #fff;
border-radius: 10px;
`
const Checkbox = styled.input`
margin-right: 2rem;
`
const TodoTask = styled.p`
width: 400px;
border: .5px solid rgba(0,0,0,0.5);
outline: none;
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
background-color: #000;
cursor: pointer;
`
const TodoAddTask = styled.div`
position: absolute;
top: 50%;
left: 2rem;
transform: translateY(-50%);
width: 500px;
height: 300px;
background-color: #f3f5f9;
border-radius: 10px;
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
border: 2px solid rgba(0,0,0,0.6);
transition: all ease-in-out 0.3s;
&:focus{
  border: 2px solid rgba(0,0,0,0.8);
  
}
`

const Label = styled.h3`
text-align: center;
margin-top: 1rem;
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
border: 2px solid rgba(0,0,0,0.6);
transition: all ease-in-out 0.3s;
cursor: pointer;
font-weight: 500;
&:hover{
  border: 2px solid rgba(0,0,0,0.8);
  
}
`


const App = () => {
   const [task , setTask ] = useState(false)

  return (
    <>
     <GlobalStyle />
     <Container>
       <TodoContainer>
       <Title>Welcome ,</Title>
         <Subtitle>Your tasks</Subtitle>
        <Todo>
           <Checkbox type='checkbox'/>
           <TodoTask>55555555555555</TodoTask>
        </Todo>
       </TodoContainer>
       <Span onClick={()=>setTask(!task)}>
         <AiOutlinePlus size={30} color='#fff'/>
       </Span>
     </Container>
     
     <TodoAddTask style={{display: task ? 'block' : 'none'}}>
       <Label>Add Task</Label> <br/>
       <InputDiv>
       <Input type="text"  placeholder='add a task'/>
       <Button>Create task</Button>
       </InputDiv>
     </TodoAddTask>

    </>
  )
}

export default App