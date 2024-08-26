import { Link } from "react-router-dom";

function Navbar() {
    return ( <div className="m-2">
        <Link to="/" className="btn btn-sm btn-primary me-2">Home</Link>
        <Link to="/login" className="btn btn-sm btn-primary me-2">Login</Link>
        <Link to="/register" className="btn btn-sm btn-primary me-2">Register</Link>
        <Link to="/articles" className="btn btn-sm btn-primary me-2">Articles</Link>
        <Link to="/series" className="btn btn-sm btn-primary me-2">Series</Link>
        <Link to="/techs" className="btn btn-sm btn-primary me-2">Techs</Link>
    </div> );
}

export default Navbar;