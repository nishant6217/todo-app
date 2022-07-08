import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () =>{

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);


    const itemEvent =(event) =>{
        setInputList(event.target.value);
    };

    const listOfItems =() =>{
setItems((oldItems) =>{
    return [...oldItems, inputList]
})
setInputList('')
    };

    return(
        <>
        <div className="main_div">

            <div className="center_div">
                <br />
                <h1> Todo List</h1>
                <br />
                <input type="text" placeholder ="Add an Item" onChange={itemEvent} value={inputList}/>
                <button onClick={listOfItems}>+</button>
                <ol>
                    {/* <li>{inputList}</li> */}
                    {items.map((itemval)=>{
                        // return <li>{itemval}</li>
                         return <TodoList text ={itemval} />
                    })}
                </ol>
            </div>
        </div>
        
        
        </>
    )
     
}
export default App;