import {restrautList } from "../contants"
import Restrauntcard from "./RestrautList";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData}  from "../Utills/Helper";
import useOnline from "../Utills/useOnline";


const BodyCompoonent = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filterrestaurants, setfilterRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [errorMsg, setErrorMsg] = useState('');
  
  useEffect(() => {
     getRestaurants();
   }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
   );
   const json = await data.json();
   // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }



  const tocheckonline = useOnline();
  if(!tocheckonline) {
    return <h1>Offline check your internet connection </h1>
  }

// copied code 
const searchData = (searchText, restaurants ) => ()=> {  
  if(searchText !== '') {
    const data = filterData(searchText,restaurants);
    setfilterRestaurants(data); 
    setErrorMsg('');
  if (data.length === 0) {
    setErrorMsg('No matches found ');
  }
 else {
    if(errorMsg) setErrorMsg('');
    setAllRestaurants(allrestaurants);
  }

  }
}


if(!allrestaurants) return null;
 return allrestaurants?.length === 0 ? (
 <Shimmer/>) :(
    <>
    <div className="bg-red-100 p-2 rounded-2xl m-1">
    <div className=" text-center ">
      <input type="text" 
           className=" border-2 shadow-slate-900  p-3  w-96 rounded-lg"
           placeholder="Search"
           value={searchText}
           onChange={(e) => {
             setSearchText(e.target.value);
           }}
      />
      <button className="bg-lime-600  p-3  text-white rounded-lg ml-2" 
      onClick={ 
        searchData(searchText, allrestaurants)
    }
      >Search</button>
      <span><Link className=" font-bold  pl-10" onClick={()=>{setAllRestaurants(data)}}>All Resturant</Link></span>
    </div>
    </div>
    
    {errorMsg}
    

      <div className="flex flex-wrap justify-items-center">
        {
          filterrestaurants.map(function(restaurant) {
            //console.log(restaurant)
                return  (<Link  to={"/restraunt/" +restaurant.data.id } key ={restaurant.data.id}>
                    <Restrauntcard  {...restaurant.data} />
                    </Link> )
            })
          } 
          
          
            
          
      </div>
  
   </>
 );
}



export default BodyCompoonent;   


