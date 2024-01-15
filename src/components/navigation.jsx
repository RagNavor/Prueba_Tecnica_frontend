import { Link } from "react-router-dom"

export function Navigation(){
    return(
        <div>
            <h1>Data Analizer</h1>
            {localStorage.getItem('token') && <Link to='/SignUp'>Registro</Link>}
            
            <Link to='/LogIn'>Login </Link>
            <Link to='/LogOut'>Logout </Link>
        </div>
    )
}