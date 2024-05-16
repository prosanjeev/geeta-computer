import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { FaAngleDown, FaAngleUp, FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // navList Data
  const navList = (
    <ul className="flex space-x-3 lg:space-x-10 text-white font-medium text-md lg:text-xl px-5 ">
      {/* Home */}
      <li className="py-2">
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Product */}
      <li className="py-2">
        <Link to={"/allproduct"}>All Product</Link>
      </li>

      <li
        className="relative lg:w-[130px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={user ? "/user-dashboard" : "/login"}>
          <button className="flex lg:w-[130px] items-center gap-2 px-3 py-2 rounded-md bg-transparent  hover:bg-blue-500 hover:text-white focus:outline-none">
            <FaRegUserCircle />
            {user ? "User" : "Login"}
            {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </Link>
        {showDropdown && (
          <ul
            className="absolute top-full right-0 mt-0 bg-white shadow-md py-1 rounded-md "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li className="lg:w-[130px] bg-white ">
              <Link
                to={user ? "/" : "/signup"}
                className="block px-6 py-1 text-blue-600 font-[600] hover:bg-gray-200"
                onClick={() => {
                  setShowDropdown(false);
                  if (user) logout();
                }}
              >
                {user ? "Logout" : "Sign Up"}
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* Admin */}
      {user?.role === "admin" && (
        <li className="my-2">
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      )}

      {/* logout */}
      {/* {user && (
        <li className=" cursor-pointer my-2" onClick={logout}>
          Logout
        </li>
      )} */}

      {/* Cart */}
      <li>
        <Link to={"/cart"} className="flex items-center py-2">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
          Cart ({cartItems.length})
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-pink-600 sticky top-0 z-50">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 lg:w-[80vw] lg:mx-auto ">
        {/* left  */}
        <div className="left py-3 lg:py-0 ">
          <Link to={"/"}>
            {/* <h2 className=" font-bold text-white text-2xl text-center">
              Geeta second laptop
            </h2> */}
            <img
              src="/logo.png"
              alt=" Geeta second laptop"
              className="flex justify-center"
            />
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0 ">{navList}</div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
