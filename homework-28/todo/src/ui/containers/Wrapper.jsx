import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Selectors from "../../engine/core/todo/selectors";
import { setItem } from "../../engine/core/todo/slice";

import Form from "../components/Form";
import Items from "../components/Items";
import Footer from "../components/Footer";
import Search from "../components/Search";

function Wrapper() {
    const dispatch = useDispatch();
    const memoItems = useSelector(Selectors.memoItems);

    useEffect(() => {
        const defState = JSON.parse(localStorage.getItem("items")) || [];
        dispatch(setItem(defState))
    }, [dispatch])

    return (
        <div className="container todo">
            <Search />
            <h1 className="todo__title">TODO</h1>
            <Form />
            {memoItems.map((item) => (
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