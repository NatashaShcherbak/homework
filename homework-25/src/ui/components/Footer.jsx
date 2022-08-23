import Link from "./Link";

function Footer() {
    return (
        <footer className="footer">
            <div className="container wrapper">
                <h1 className="title">Natasha Shcherbak</h1>
                <ul className="list">
                    <li className="text"><Link to="tel:+380968383833">+380968383833</Link></li>
                    <li className="text"><Link to="mailto:mail@ukr.net">mail@ukr.net</Link></li>
                    <li className="text"><Link to="https://github.com/NatashaShcherbak">git</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;