import { useSelector } from "react-redux";

import Selectors from "../../engine/core/todo/selectors";

import Button from "./Button";

function Footer() {
    const items = useSelector(Selectors.items);

    return (
        <footer className="todo__footer">
            <p className="todo__footer-text">Total: {items.length}</p>
            <Button text="All delete" />
        </footer>
    )
}

export default Footer;