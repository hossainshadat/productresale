import React from "react";
import AdvertisedItems from "./AdvertisedItems";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import Stats from "./Stats";

const Home = () => {
  return (
    <div>
      <Banner />
      <AdvertisedItems />
      <HomeCategory />
      <Stats />
    </div>
  );
};

export default Home;
