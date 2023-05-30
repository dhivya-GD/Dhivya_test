import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import {Image_CdnLink} from "../contants";
import Shimmer from "./Shimmer";
import useRestraunt from  "../Utills/useRestraunt";
import { addItem } from "../Utills/cartSlice";
import { useDispatch } from "react-redux";
import store from "../Utills/Store";


const  RestrauntMenu = () => {
    const params = useParams();
    const {id} = params;
    console.log(id);
    const restraunt =  useRestraunt(id);
    
    const dispatch = useDispatch();
    const handleevent = (item) => {
      dispatch(addItem(item));
    }

    return !restraunt ? (
           <Shimmer />
         ) : (
        <div>
          <div className="flex justify-around my-10">
          <div><img src={Image_CdnLink + restraunt?.cloudinaryImageId} /></div>
           <div>
               <h1 className="font-medium text-lg text-lime-800">Restraunt id: {id}</h1>
              <h2 className="font-medium text-lg text-lime-800">{restraunt?.name}</h2>
              <h3 className="font-medium text-lg text-lime-800">{restraunt?.area}</h3>
              <h3 className="font-medium text-lg text-lime-800">{restraunt?.city}</h3>
               <h3 className=" bg-lime-700 px-2 rounded-md text-white">{restraunt?.avgRating} stars</h3>
                <h3 className="font-medium text-lg text-lime-800">{restraunt?.costForTwoMsg}</h3>
             </div>
             </div>
             <div>
          
               <div className="w-[800px] mx-auto my-10" >
                 {Object.values(restraunt?.menu?.items).map((item) => (
                  <>
                  <div key={item.id}>
                  <div className="flex justify-between items-center shadow-lg my-4 border" key={item.id}>
                    <div className="pl-4" >
                    <h1 className="font-medium text-lg text-lime-800">{item.name}</h1>
                    <h3 className="font-medium text-lg text-lime-800">{item.category}</h3>
                    </div>
                    <div className=" w-60 ">
                      <img  src= { Image_CdnLink + item.cloudinaryImageId } />
                    </div>
                  </div>
                  <button className = " bg-lime-700 px-2 rounded-md text-white" onClick={()=> handleevent(item)}>AddITem</button>
                  </div>
                  </>
                ))}
                </div>
             </div>
           </div>
    );
}
export default RestrauntMenu;