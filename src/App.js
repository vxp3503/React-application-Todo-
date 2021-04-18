import './App.css';
import Header from './My Components/Header';
import {Footer} from './My Components/Footer';
import {Todos} from './My Components/Todos';
import {About} from './My Components/About';
import {AddTodo} from './My Components/AddTodo';
import { useState,useEffect } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let inittodo =[];
  if(localStorage.getItem("todos")===null)
  {
    inittodo=[];
  }
  else
  inittodo=JSON.parse(localStorage.getItem("todos"));
  const onDelete= (todo)=>{
    console.log("I am on delete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;

    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo= (title,desc)=>{
    let sno;
    if(todos.length===0)
    {
      sno=1;
    }
    else
    sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const [todos,setTodos] =useState(inittodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Router>
    <Header title="My-todos-list" searchBar={true}/>
    <Switch>
         <Route exact path="/" render={()=>{
           return(
             <>
           <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
           </>
           )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;



