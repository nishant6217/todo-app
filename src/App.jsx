import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList('');
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            });
        });
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> Todo List</h1>
                    <br />
                    <input type="text" placeholder="Add an Item" onChange={itemEvent} value={inputList} />
                    <button onClick={listOfItems}>+</button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {items.map((itemval, index) => {
                            // return <li>{itemval}</li>
                            return <TodoList key={index} text={itemval} id={index} onSelect={deleteItems} />
                        })}
                    </ol>
                </div>
            </div>


        </>
    )

}
export default App;