import {Image_CdnLink} from "../contants";
import {useContext} from "react";
import usercontx from "../Utills/UserContext";




const Restrauntcard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
   const {user} =  useContext(usercontx);
    return (
       <div className=" bg-white rounded-lg overflow-hidden shadow-md m-4 w-72 h-80 hover:shadow-2xl">
       <img  src= { Image_CdnLink + cloudinaryImageId } />
          <div className=" p-3">
            <h2 className=" font-bold">{name}</h2>
            <h3 className=" font-medium">{cuisines.join(" , ")}</h3>
            <h4><span className=" bg-lime-700  px-2 rounded-md text-white">{avgRating} </span> <span className="pl-2">stars</span></h4>
            <h5>{user.name}</h5>
          </div>
          
    </div>
    );
 }

 export default Restrauntcard;