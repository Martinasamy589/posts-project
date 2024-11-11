import { useContext } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

export default function Layout(){
    const{user,setUser, token, setToken} = useContext(AppContext)
    const navigate = useNavigate()

    async function handleLogout(e) {
        e.preventDefault();

        const res = await fetch('/api/logout',{ 
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await res.json();

        if(res.ok) {
            setUser(null);
            setToken(null);
            localStorage.removeItem('token');
            navigate('/')
        }
    }

    return(
    <>
    <header>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <Link to="/" className="nav-link">Home</Link>
            {user? (<>
                <h1 style={{color:"white"}}>{user.name}</h1>

                <Link to={"/create"} className="nav-link">Create a Post</Link>

                <form onSubmit={handleLogout}>
                    <button className="nav-link">Logout</button>
                </form>
                </>
            ) : (
                <div className="navbar navbar-expand-xl">
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
            </div>
            )}
            
        </nav>
    </header>


    <main>
        <Outlet/>
    </main>
    </>
)
}