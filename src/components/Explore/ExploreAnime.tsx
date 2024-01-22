import React from "react";
import { Button } from "../Shared/Button";

const ExploreAnime = () => {
  return (
    <div className='anime md:block hidden'>
      <img
        src='images/anime.jpeg'
        alt='noen'
        loading='lazy'
        className='w-full object-contain bg-blend-exclusion'
          />
          <Button>Get started</Button>
    </div>
  );
};

export default ExploreAnime;
