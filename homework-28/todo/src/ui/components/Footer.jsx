import { useSelector, useDispatch } from "react-redux";

import Selectors from "../../engine/core/todo/selectors";

import { handleAllDelete } from "../../engine/core/todo/thunk";

import Button from "./Button";

function Footer() {
    const items = useSelector(Selectors.items);
    const dispatch = useDispatch();

    const deleteAllItems = () => {
        dispatch(handleAllDelete());
    };

    return (
        <footer className="todo__footer">
            <p className="todo__footer-text">Total: {items.length}</p>
            <Button text="All delete" onClick={deleteAllItems} />
        </footer>
    )
}

export default Footer;