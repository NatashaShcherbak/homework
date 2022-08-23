import { useContext } from "react";
import { ThemeContext } from "../_helpers/context/theme";

function Layout({children}) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>{children}</div>
    )
}

export default Layout;