import React from "react";
const TodoInput = () => {
    const greeting = () => {
        console.log("hello")
    }
    const handleChange = (event) => {
        console.log(event)
    }
    return (
        <div className="">
            <input onChange={handleChange} type="text"  placeholder= "Thêm công việc cần làm"></input>
            <button onClick={greeting}>Add</button>
        </div>
    )
}
export default TodoInput