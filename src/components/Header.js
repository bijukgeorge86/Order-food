import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNames, setBtnNames] = useState("Login");

    useEffect(() => {
        /*console.log("useEffect called");*/
    }, [btnNames]);
    //debugger;
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    //console.log(loggedInUser);

    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    return (
        <div className="flex justify-between shadow-lg bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status :{onlineStatus ? " ✅ " : " 🔴 "}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contactUs">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/cart">Cart ({cartItems.length} Items)</Link>
                    </li>
                    <button
                        className="login"
                        onClick={() => {
                            btnNames === "Login"
                                ? setBtnNames("Logout")
                                : setBtnNames("Login");
                            //console.log(btnNames);
                        }}
                    >
                        {btnNames}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
