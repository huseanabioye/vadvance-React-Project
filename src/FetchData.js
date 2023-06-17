import React from "react";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users";
export const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    
    const fetchData = async () =>{
        try{
            const response = await fetch(url);
            const users = await response.json();
            setUsers(users)
            // console.log(users);
           
        } catch(error){
      console.log(error);
        }
    };
    fetchData()
    // console.log('Hello');
}, [])
  return <section>
    <h3>git users</h3>
    <ul className="users">
        {users.map((user)=>{
            const {id, login,avatar_url,html_url } = user;
            console.log(user);
            return<li key={id}>
                <img  src={avatar_url} alt={login}/>
                <div className="users">
                    <h5>{login}</h5>
                    <a href={html_url}> profile</a>
                </div>
            </li>
        })}
    </ul>
  </section>;
};
