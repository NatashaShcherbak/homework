import { v4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";

import { setItem } from "../../engine/core/todo/slice";
import Selectors from "../../engine/core/todo/selectors";

import Button from "./Button";
import Input from "./Form/Input";

function Form() {
    const dispatch = useDispatch();
    const items = useSelector(Selectors.items);

    const handleAdd = (event) => {
        event.preventDefault();
        const newItem = [{id: v4(), description: event.target.description.value}, ...items];
        dispatch(setItem(newItem));
        localStorage.setItem("items", JSON.stringify(newItem));
        event.target.description.value = '';
    };

    return (
        <form action="#" className="todo__item" onSubmit={handleAdd}>
            <Input />
            <Button text="Add"/>
        </form>
    )
}

export default Form;