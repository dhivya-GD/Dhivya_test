import {useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/Images/Foodvilla.png";
import usercontx from "../Utills/UserContext";
import {useSelector} from "react-redux";
import store from "../Utills/Store";


const HeaderComponent = () => {                       
   const [logincheck, setLoginCheck] = useState(true);

   const count = 1;
   console.log("render");
   
   const {user} = useContext(usercontx);

   useEffect(() => {
      console.log("useEffort");
   },[logincheck])

   const cartItem = useSelector(store => store.cart.items);
   console.log(cartItem);
    return (
      <div className="bg-slate-200 px-2 rounded-2xl">
         <div className="flex justify-between">
            <div>
               {count && <h1>Messages: {count}</h1>}
            </div>
            <Link to="/"><img className="logo h-28" alt="logo"  src={Logo} /></Link>
               <ul className="flex py-10">
                  <li className="px-3 font-medium text-lg text-lime-800"><Link to="about">About us</Link></li>
                  <li className="px-3 font-medium text-lg text-lime-800"><Link to="contactus">Contact US</Link></li>
                  <li className="px-3 font-medium text-lg text-lime-800"><Link to="privacypolicy">Privacy policy</Link></li>
                  <li className="px-3 font-medium text-lg text-lime-800"><Link to="instamart">Instamart</Link></li>
                  <li className="px-3 font-medium text-lg text-lime-800"><Link to="cart">Cart {cartItem.length}</Link></li>
                  <li className="px-3 font-medium text-lg text-lime-800"><Link to="theme">Themeconcept </Link></li>
               
               </ul>
               {user.name}
               { logincheck ?(
               <button className="text-black font-medium text-lg" onClick={ () => { setLoginCheck(false)}}>Logout</button>):(
               <button className="text-black font-medium text-lg" onClick={ () => { setLoginCheck(true)}}>Login</button>)
               }
         
         </div>
    </div>
   );
   
}; 
export default HeaderComponent;

