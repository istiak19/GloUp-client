import { Link, NavLink } from "react-router-dom";
import logoPic from '../../assets/assets/logo2.png'
import useAuth from "../../Hook/useAuth";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/portfolio'>Our Portfolio</NavLink></li>
        <li><NavLink to='/team'>Our Team</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                // console.log(result.user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <div className="navbar bg-[#E5E5E5] p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link className="text-xl">
                        <div className="flex justify-center items-center">
                            <img className="w-12" src={logoPic} alt="" />
                            <div>
                                <h3 className="text-2xl font-semibold">GloUp</h3>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul> */}
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                    <div className="mr-3">
                        {
                            user && (<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div title={user?.displayName} className="w-10 rounded-full">
                                    <img referrerPolicy='no-referrer'
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>)
                        }
                    </div>
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn bg-[#F63E7B] text-white px-10">LogOut</button>
                        </> : <Link to='/login' className="btn bg-[#F63E7B] text-white px-10">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;