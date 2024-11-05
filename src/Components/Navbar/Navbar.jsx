import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart} from "react-icons/md"
import { FaRegHeart } from "react-icons/fa";


const Navbar = ({ cartCount, wishListCount }) => {

  const location = useLocation( )

  const navbarBgColor = location.pathname === '/dashboard' || location.pathname === '/statistics' || location.pathname.startsWith('/category') || location.pathname.startsWith('/details') || location.pathname === '/aboutUs'
  ? 'bg-white text-black font-bold'
  : 'bg-[#9538E2]'; 

  const logoColour = location.pathname ==='/dashboard' || location.pathname === '/statistics' ||  location.pathname.startsWith('/category') || location.pathname.startsWith('/details') || location.pathname === '/aboutUs'
  ? 'text-black': 'text-white'

    return (
        <div className={`navbar ${navbarBgColor} px-4 lg:px-16`}>
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/aboutUs">AboutUs</NavLink>
      </ul>
    </div>
    <Link to="/" className={`${logoColour} font-bold text-xl`} >Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-8 px-1">

        <NavLink className={( {isActive} ) => `${isActive? 'text-white font-bold underline' : 'text-black'}`} to="/">Home</NavLink>
        <NavLink className={( {isActive} ) => `${isActive? 'text-[#9538E2] font-bold' : ''}`} to="/statistics">Statistics</NavLink>
        <NavLink className={( {isActive} ) => `${isActive? 'text-[#9538E2] font-bold' : 'text-black'}`} to="/dashboard">Dashboard</NavLink>
        <NavLink className={( {isActive} ) => `${isActive? 'text-[#9538E2] font-bold' : 'text-black'}`} to="/aboutUs">About Us</NavLink>

    </ul>
  </div>
  <div className="navbar-end flex items-center gap-4">
                <NavLink to="/dashboard">
                <button className="relative bg-white p-2 rounded-full">
                    <MdOutlineShoppingCart />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </button>
                </NavLink>

               <NavLink to="/dashboard">
               <button className=" relative bg-white p-2 rounded-full"> <FaRegHeart />  
                {wishListCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {wishListCount}
                        </span>
                    )}
                </button>
               </NavLink>
            </div>
</div>
    );
};

export default Navbar;