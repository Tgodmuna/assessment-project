import React from "react";
import ExploreWriteUp from "./ExploreWriteUp";
import ExploreAnime from "./ExploreAnime";

const Explore = () => {
  return (
    <section className='flex justify-center items-center w-full'>
      <ExploreWriteUp />
      <ExploreAnime />
    </section>
  );
};

export default Explore;
