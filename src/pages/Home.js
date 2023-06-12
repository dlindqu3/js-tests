import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

    const [storeData, setStoreData] = useState();
    const [storeDataAll, setStoreDataAll] = useState();  
  
    // let getStoreDataAll = async () => {
    //   let url = "https://fakestoreapi.com/products/"
    //   let res = await axios.get(url); 
    //   console.log("res: ", res); 
    //   if (res.data.category){
    //     setStoreDataAll(res); 
    //   }
    // }
  
    useEffect(() => {
      let getStoreData = async () => {
        let url = "https://fakestoreapi.com/products/1";
        let res = await axios.get(url); 
        setStoreData(res);
      } 
      getStoreData(); 
    })

    let getAllStoreData = async () => {
        let url = "https://fakestoreapi.com/products/";
        let res = await axios.get(url); 
        console.log(res); 
        setStoreDataAll(res); 
    }

  return (
    <div>
        <p>hello</p>
        <h1 data-testid="food">Pizza</h1>
        {/* <button onClick={() => {console.log("button clicked")}}>GetStoreData</button> */}
        { storeData && <p data-testid="product-title">{ storeData.data.title }</p> }
        <button onClick={() => {getAllStoreData()}}>GetAllStoreData</button>
        { storeDataAll && <p data-testid="product2-title">{ storeDataAll["data"][1]["title"] }</p> }
    </div>
  )
}

export default Home