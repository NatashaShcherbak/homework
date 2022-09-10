import { useDispatch } from "react-redux";

import { handleAdd } from "../../engine/core/todo/thunk";

import Button from "./Button";
import Input from "./Form/Input";

function Form() {
    const dispatch = useDispatch();

    const addItem = (event) => {
        event.preventDefault();
        dispatch(handleAdd(event.target.description.value));
        event.target.description.value = '';
    };

    return (
        <form action="#" className="todo__item" onSubmit={addItem}>
            <Input />
            <Button text="Add" />
        </form>
    )
}

export default Form;