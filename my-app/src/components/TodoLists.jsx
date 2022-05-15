import React from "react";
import Item from "./TodoItems";
import {TodoInfo} from "../constants/mock.js"
const TodoLists = () => {
    return (
        <div>
            {TodoInfo.map((todo) => {
                return (<Item key ={todo.id} todo={todo} />)
            })}
        </div>
    )
}
export default TodoLists