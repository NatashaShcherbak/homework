import { useDispatch, useSelector } from "react-redux";

import { handleUpdate, handleEdit, handleCancel, handleDelete } from "../../engine/core/todo/thunk";

import Selectors from "../../engine/core/todo/selectors";

import Button from "./Button";
import Input from "./Form/Input";

function Items({ id, description, checked }) {
    const dispatch = useDispatch();
    const edit = useSelector(Selectors.edit);

    const onChecked = (e) => dispatch(handleUpdate(id, description, e.target.checked));

    const editItems = () => dispatch(handleEdit(id));

    const saveItems = (event) => {
        event.preventDefault();
        dispatch(handleUpdate(id, event.target.description.value, checked));
    };

    const cancelItem = () => dispatch(handleCancel(id, description));

    const deleteItem = () => dispatch(handleDelete(id));

    return (
        edit === id
            ? <form action="#" className="todo__item todo__item-edit" onSubmit={saveItems}>
                <Input value={description} onChange={(e) => e.target.value} />
                <Button text="Save" />
                <Button text="Cancel" type="button" onClick={cancelItem} />
            </form>
            : <div className="todo__item todo__item_row">
                <label className="todo__row">
                    <input type="checkbox" defaultChecked={checked} onClick={onChecked} />
                    <p className="todo__text">{description}</p>
                </label>
                <Button text="Edit" onClick={editItems} />
                <Button text="Delete" onClick={deleteItem} />
            </div>
    )
}

export default Items;