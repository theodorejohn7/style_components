import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

export default function Hero() {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />

      <Container>
        <MainHeading> Your data are secure with us</MainHeading>

        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          {/* <HeroButton>Find More</HeroButton> */}

          <Button>Find More</Button>

        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};
