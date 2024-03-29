import React from "react";
import ExploreWriteUp from "./ExploreWriteUp";
import ExploreAnime from "./ExploreAnime";

const Explore = () => {
  return (
    <section className=' md:flex-row flex-col-reverse m-auto flex justify-center items-center w-full bg-gradient-to-b from-slate-400 to-lightOrange'>
      <ExploreWriteUp />
      <ExploreAnime />
    </section>
  );
};

export default Explore;
