import { Link } from "react-router-dom"
import './Styles/Navbar.css'
export const Navbar = () => {


    return(
        <nav className="navbar">
            <div>
                <h1>Cafe</h1>
            </div>
            <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            </div>
        </nav>
    )
}