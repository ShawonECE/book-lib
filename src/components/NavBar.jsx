import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold work-sans-font">BookLib</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li className="text-base"><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "#23BE0A" : "",
                            backgroundColor: isActive ? "#00000000" : "",
                            borderRadius: '8px',
                            border: isActive ? '1px solid #23BE0A' : ""
                        };
                    }} to="/">Home</NavLink></li>
                    <li className="text-base"><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "#23BE0A" : "",
                            backgroundColor: isActive ? "#00000000" : "",
                            borderRadius: '8px',
                            border: isActive ? '1px solid #23BE0A' : ""
                        };
                    }} to="/listed-books">Listed Books</NavLink></li>
                    <li className="text-base"><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "#23BE0A" : "",
                            backgroundColor: isActive ? "#00000000" : "",
                            borderRadius: '8px',
                            border: isActive ? '1px solid #23BE0A' : ""
                        };
                    }} to="/pages-to-read">Pages to Read</NavLink></li>
                    <li className="text-base"><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "#23BE0A" : "",
                            backgroundColor: isActive ? "#00000000" : "",
                            borderRadius: '8px',
                            border: isActive ? '1px solid #23BE0A' : ""
                        };
                    }} to="/discover">Discover</NavLink></li>
                    <li className="text-base"><NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "#23BE0A" : "",
                            backgroundColor: isActive ? "#00000000" : "",
                            borderRadius: '8px',
                            border: isActive ? '1px solid #23BE0A' : ""
                        };
                    }} to="/top-picks">Top Picks</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn work-sans-font text-base font-semibold text-white bg-[#23BE0A]">Sign In</button>
                <button className="btn work-sans-font text-base font-semibold text-white bg-[#59C6D2]">Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;