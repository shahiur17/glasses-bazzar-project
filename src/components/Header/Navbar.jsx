import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
              <div className="navbar bg-base-100">
                 <div className="navbar-start">
                <a className="btn btn-ghost text-xl">GLASSES</a>
                </div>
             <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                 <li ></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                 </ul>
             </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
         </div>
        </div>
        </div>
    );
};

export default Navbar;