import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
              <div className="navbar bg-base-100">
                 <div className="navbar-start">
                 <li className="btn btn-ghost text-xl ">
                    <Link to="/">GLASSES</Link>
                 </li>

                {/* <a className="btn btn-ghost text-xl">GLASSES</a> */}
                </div>
             <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                 <li ></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                 </ul>
             </div>
        <div className="navbar-end">
          <Link to="/login">
          <a className="btn">Login</a>
          </Link>
         </div>
        </div>
        </div>
    );
};

export default Navbar;