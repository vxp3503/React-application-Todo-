import React from 'react'
import { Todoitem } from '../My Components/Todoitem';
export const Todos = (props) => {
    let mystyle ={
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className="my-3">Todos List</h3>
                {
                    props.todos.length===0? "No todos to display":
                props.todos.map((todo) => {
                    return(
                        <>
                        <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        <hr/>
                        </>
                         )
                }
                )}
        </div>
    )
}
