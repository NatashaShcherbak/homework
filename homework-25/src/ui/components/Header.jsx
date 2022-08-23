import { ThemeContext, color } from "../_helpers/context/theme";
import { useContext } from "react";

import Link from "./Link";

import { routers } from "../../core/config";

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeColor = () => {
        theme === color.light ? setTheme(color.dark) : setTheme(color.light);
    }

    return (
        <header className="header">
            <div className="container wrapper">
                <h1 className="title">Natasha Shcherbak</h1>
                <ul className="list">
                    <li className="text"><Link to={routers.main} type="NavLink">Main</Link></li>
                    <li className="text"><Link to={routers.about} type="NavLink">About</Link></li>
                    <li className="text"><Link to={routers.todo} type="NavLink">TODO List</Link></li>
                    <li className="text"><Link to="#">Contacts</Link></li>
                    <li><button className="btn" onClick={changeColor}>PUSH</button></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;