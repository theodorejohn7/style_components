import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-famil:"Montserrat', sans-serif;
}`;

export const Container = styled.div`
width: 100%
max-width:1300px;
margin-left: auto;
margin-right:auto;
padding : 0 50px;

@media screen and (max-width : 960px){
    padding : 0 30px;

}
`;

export const MainHeading = styled.h1`
 font-size: clamp(2.3rem, 6vw, 4.5 rem);
margin-bottom: 2rem;
color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")}
width: 100%
letter-spacing: 4px;
tet-align: center;


`;

export const Heading = styled.h2`
font-size : clamp(1.3rem, 13vw, 3.1rem)
margin:${({ margin }) => (margin ? margin : "")}
margin-bottom:${({ mb }) => (mb ? mb : "")}
margin-top:${({mt})=>(mt?mt:'')};
color:${({inverse})=>(inverse?'$403ae3':'#fff')};
letter-spacing:0.4rem;

`;

export const TextWrapper = styled.span``;

export const Section = styled.section``;

export const Row = styled.div``;

export const Column = styled.div``;

export const Button = styled.button``;
