import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyCompoonent  from "./components/Body";
import FooterComponent from "./components/Footer";
import About from  "./components/About";
import ContactUs from  "./components/ContactUs";
import InstaMart from  "./components/InstaMart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import {Outlet} from "react-router-dom";
import RestrauntMenu from "./components/RestrauntMenu";
import {lazy, Suspense,useState} from "react";
import usercontx from "./Utills/UserContext";
import {useContext} from "react";
import Cardcomponent from "./components/Cardcomponent";
import { Provider } from "react-redux";
import store from "./Utills/Store";
import Backendcall from "./Utills/Backendcall";
import Themeconcept from "./components/Themecomponent";




const PrivacyPolicy = lazy(()=> import ("./components/PrivacyPolicy"));


const root  = ReactDOM.createRoot(document.getElementById("root"));
// swigy backend data 


const AppComponent = () => {
   const [userlg,setUserlg] = useState({
      name :"dummy name ",
      email:"dummy@gmail.com",
   });
   return (
      <Provider store = {store}>
      <usercontx.Provider value={{
            user:userlg,
            setUserlg:setUserlg,
         }}>
      <div className="container mx-auto mt-2"> 
      <HeaderComponent />
     
      <Outlet />
      <FooterComponent />
     
      </div>
      </usercontx.Provider>
      </Provider>
   );
}

const appRouter = createBrowserRouter([
   { 
     path:"/",
     element:<AppComponent/>,
     errorElement:<Error />,
     children:[
         {
            path:"/about",
            element:<About />,
         },
         {
            path:"/contactus",
            element:<ContactUs />,
         },
         {
            path:"/privacypolicy",
            element:<Suspense><PrivacyPolicy /></Suspense>,
         },
         {
            path:"/instamart",
            element:<InstaMart/>,
         },
         {
            path:"/",
            element:<BodyCompoonent />,
         },
         {
            path:"/restraunt/:id",
            element: <RestrauntMenu />,

         },
         {
             path:"/cart",
             element:<Cardcomponent />
         },
         {
            path:"/theme",
            element:<Themeconcept />
        },
     ]
     }
 ]);
root.render(<RouterProvider  router={appRouter}/>);   
