import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
useEffect(() => {
    getData();
  });


    

  const getData = () => {
        // fetch protected data from the API using axiosWithAuth
        axiosWithAuth()
            .get("/colors")
            .then(res => {
                console.log(res.data);
                 setColorList(res.data);
            })

            .catch(err => console.log({ err }));
    };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
