import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [userData, setUserData] = useState(); 
  const [usersData, setUsersData] = useState(); 

  useEffect(() => {
    let getJsonPlaceholderData = async () => {
      let url = "https://jsonplaceholder.typicode.com/users/1";
      let res = await axios.get(url);
      console.log("res from useEffect: ", res); 
      setUserData(res);
    };
    getJsonPlaceholderData();
  }, []);

  let getAllJsonPlaceholderUsersData = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let res = await axios.get(url);
    console.log(res);
    setUsersData(res);
  };

  return (
    <div>
      <p>hello</p>
      <h1 data-testid="food">Pizza</h1>
      {userData && <p data-testid="user-name">{userData.data.name}</p>}
      
      <button
        onClick={() => {
          getAllJsonPlaceholderUsersData();
        }}
      >
        getUsers
      </button>
      {usersData && (
        <p data-testid="user2-name">{usersData["data"][1]["name"]}</p>
      )}
    </div>
  );
}

export default Home