import { ThemeProvider } from "../_helpers/context/theme";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routers } from "../../core/config";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import Main from "../pages/Main";
import About from "../pages/About";
import Todo from "../pages/Todo";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Layout>
                    <Header />
                </Layout>
                <main>
                    <Routes>
                        <Route path={routers.main} element={<Main />} />
                        <Route path={routers.about} element={<About />} />
                        <Route path={routers.todo} element={<Todo />} />
                    </Routes>
                </main>
                <Layout>
                    <Footer />
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;