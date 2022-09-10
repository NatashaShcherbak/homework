import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import Selectors from "../../engine/core/todo/selectors";
import { setItem } from "../../engine/core/todo/slice";

import Form from "../components/Form";
import Items from "../components/Items";
import Footer from "../components/Footer";

function Wrapper() {
    const dispatch = useDispatch();
    const items = useSelector(Selectors.items);

    useEffect(() => {
        const defState = JSON.parse(localStorage.getItem("items")) || [];
        dispatch(setItem(defState))
    }, [dispatch])

    return (
        <div className="container todo">
            <h1 className="todo__title">TODO</h1>
            <Form />
            {items.map((item) => (
                <Items
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    checked={item.checked}
                />
            ))}
            <Footer />
        </div>
    )
}

export default Wrapper;