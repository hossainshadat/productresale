import axios from "axios";
import React, { useEffect, useState } from "react";
import AdvertisedItems from "./AdvertisedItems";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import Stats from "./Stats";

const Home = () => {
  const [advertise, setAdvertise] = useState([]);
  console.log(advertise);
  const getAdvertise = () => {
    axios.get("http://localhost:5000/advertise").then((res) => {
      setAdvertise(res.data.data);
    });
  };

  useEffect(() => getAdvertise(), []);
  return (
    <div>
      <Banner />
      {advertise.length > 0 ? (
        <>
          (<AdvertisedItems advertise={advertise} />)
        </>
      ) : (
        <></>
      )}

      <HomeCategory />
      <Stats />
    </div>
  );
};

export default Home;
