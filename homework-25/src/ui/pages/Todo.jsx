import { useState, useEffect } from 'react';

import "../_helpers/assets/css/todo.css";

import Form from '../components/Form';
import Item from "../components/Item";

function Todo() {
    const [items, setItems] = useState(() => {
        return JSON.parse(localStorage.getItem('items')) || [];
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    },[items])

    const addItem = ({ id, description, checked }) => {
        setItems([...items, { id, description, checked }]);
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const updateItem = ({ id, checked, description }) => {
        const updateItems = items.map(item => {
            if(item.id === id) {
                item.checked = checked;
                item.description = description;
            }
            return item;
        })
        setItems(updateItems);
    }

    return (
        <section className="wrapper-todo">
            <div className="container todo">
                <h1 className="todo__title">TODO</h1>
                <Form onAdd={addItem}/>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        checked={item.checked}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                    />
                ))}
            </div>
        </section>
    )
}

export default Todo;