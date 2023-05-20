import { Link } from "react-router-dom";
import logo from "../../../../assets/logo/juno-logo.png";
import { FaHome } from 'react-icons/fa';

const NavigationBar = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="navbar bg-[#212529] py-4 px-8 text-neutral-content border-2 border-orange-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 font-bold">
                            <li><Link to="/"><FaHome />Home</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">All Toys</Link></li>
                            <li><Link to="#">My Toys</Link></li>
                            <li><Link to="/add-toy">Add a Toy</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="/blog">Blogs</Link></li>
                        </ul>
                    </div>
                    <img src={logo} alt="juno-toy-marketplace-logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-xl">
                        <li><Link to="/"><FaHome />Home</Link></li>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">All Toys</Link></li>
                        <li><Link to="#">My Toys</Link></li>
                        <li><Link to="/add-toy">Add a Toy</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;