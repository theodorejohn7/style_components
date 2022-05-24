import React from "react";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import {heroOne, heroTwo, heroThree} from "../data/HeroData"
import {Content} from '../components/Content/Content'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />

    
    </>
  );
}

export default Home;
