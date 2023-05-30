import {useState,useEffect} from "react";

const Backendcall = () =>{ 
    const [user, setUser] = useState([]);
  
    const fetchData = () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }
  
    useEffect(() => {
      fetchData();
    },[])
  
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {user && user.length > 0 && user.map((userObj) => (
              <li key={userObj.id}>{userObj.name}</li>
            ))}
        </ul>
      </div>
    );
  }
  
  export default Backendcall;
