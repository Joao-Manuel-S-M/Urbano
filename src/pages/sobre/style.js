import styled from "styled-components";
import bgHome from '../../assets/images/bgabout.webp'
import Footer from "../../components/footer/Footer";


export const Home = styled.section`
    background-image: url(${bgHome});
    background-size: cover;
    width: 100vw;
    height: 100vh;

    .wrappText {
        font-family: Noto Serif;
        color: #FFF;
        text-align: center;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .wrappText h1 {
        text-shadow: 0px 7.411764621734619px 3.7058823108673096px rgba(0, 0, 0, 0.25);
        font-size: 65px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    .wrappText p {
        max-width: 820px;
        font-size: 17px;
        font-weight: 700;
        margin: 0 auto;
        text-shadow: 0px 8.412px 5.706px rgb(0, 0, 1);
    }
`

export const About = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: #FAFAFA;

    .bg {
        width: 100vw;
    }
    
    .wrappText {
        font-family: Inter;
        width: 1440px;
        margin: 0 auto;
        margin-top: 300px;
        position: relative;
        top: 205px;
        
    }

    .wrappText h1 {
        color: #2F2F2F;
        font-size: 56.76px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }

    .wrappText hr {
        width: 205px;
        border: 2px solid #F61F4B;
        border-radius: 20px;
        margin-bottom: 20px;
    }

    .wrappText p {
        color: #000;
        font-family: Inter;
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        line-height: 200.023%; /* 24.003px */
        max-width: 373px;
        margin-bottom: 20px;
    }

    .wrappText a {
        border-radius: 20px;
        background: #F61F4B;
        box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
        padding: 10px 25px;
        color: #fff;
        text-decoration: none;
    }
`

export const NossoTime = styled.section`
    background-color: #FAFAFA;

    .wrappText {
        padding-top: 20px;
        text-align: center;
        font-family: Inter;
    }

    .wrappText span {
        color: #F61F4B;
        font-size: 11.12px;
        font-weight: 600;
        letter-spacing: 4.226px;
    }

    .wrappText h1 {
        color: #383838;
        font-size: 42.12px;
        font-weight: 600;
    }

    .wrappText p {
        color: #474747;
        font-family: Inter;
        font-size: 12.09px;
        font-weight: 500;
        letter-spacing: 0.605px;
        max-width: 607px;
        margin: 0 auto;
        margin-top: 6px;
    }

    .wrappPattern {
        display: flex;
        justify-content: center;
        padding-top: 50px;
    }

    .wrappPattern .square{
        height: fit-content;
        margin-top: 18px;
    }

    .wrappPattern .circle{
        height: fit-content;
    }

    .card {
        font-family: Inter;
    }

    .card > h1 {
        color: #474747;
        font-size: 21.09px;
        font-weight: 600;
        margin-top: 20px;
    }

    .card > p {
        color: #F61F4B;
        font-size: 14.09px;
        font-weight: 500;
        letter-spacing: 1.057px;
        margin: 5px 0 15px 0;
    }

    .card > .icon {
        margin-right: 10px;
        width: 19px;
    }

    .wrappCards {
        display: flex;
        gap: 50px;
        justify-content: center;
        margin-top: 70px;
        flex-wrap: wrap;
    }
`

export const Localização = styled.section`
    height: 104vh; //Tirar depois 
    padding-top: 150px;
    padding-bottom: 20px;
    background-color: #FAFAFA;
    height: 115vh;
    
    body {
        background-color: #FAFAFA;
    }
    
    .wrappText {
        padding-top: 20px;
        text-align: center;
        font-family: Inter;
    }

    .wrappText h1 {
        color: #F61F4B;
        font-size: 42.12px;
        font-weight: 600;
    }

    .wrappText p {
        color: #474747;
        font-family: Inter;
        font-size: 12.09px;
        font-weight: 500;
        letter-spacing: 0.605px;
        max-width: 607px;
        margin: 0 auto;
        margin-top: 6px;
        /* margin-bottom: 110px; */
    }

    .wrappPattern {
        display: flex;
        justify-content: center;
        padding-top: 50px;
    }

    .icon {
        height: fit-content;
    }

    .icon2 {
        height: fit-content;
        margin-top: 110px;
    }


    .data {
        margin-top: 100px;
        max-width: 1440px;
        /* background: blue; */
        display: flex;
        margin: 80px auto 0 auto;
        scale: .9;
    }

    .dataLeft {
        /* background: red; */
        height: 220px;
        width: 720px;
        /* display: flex; */
        /* flex-direction: column; */
        
    }

    .dataRight {
        /* background: green; */
        height: 220px;
        width: 720px;
        /* display: flex; */
        /* flex-direction: column; */
        /* gap: 78%; */
    }

    .wrappHlTop {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 20px;
    }

    .wrappHlBottom {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .wrappHl {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }


    .wrappVt {
        /* display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 632px;
        position: relative;
        bottom: 271px;
        transform: rotate(90deg);
        left: 59px; */

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        bottom: 262px;
        transform: rotate(90deg);
        left: 56px;
    }

    .wrappVt2 {
        /* display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 610px;
        position: relative;
        bottom: 261px;
        transform: rotate(90deg);
        right: 60px; */

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        bottom: 261px;
        transform: rotate(90deg);
        right: 73px;
    }

    .wrappVtLeft  {
        width: 400px;
        height: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-bottom: 275px;
    }

    .wrappVtRight  {
        width: 400px;
        height: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 275px;
        
    }

    .wrappVtMid  {
        width: 400px;
        height: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .wrappHlTop > hr, 
    .wrappHlBottom > hr, 
    .wrappVtLeft > hr,
    .wrappVtMid > hr,
    .wrappVtRight > hr{
        border: 1px solid #474747;;
        box-shadow: 0px 0px 8px 0px #F61F4B;
    }

  .infs {
    max-width: 1035px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 235px;
    right: 11px;
  }

  .mais {
    color: #474747;
    text-shadow: 0px 0px 7px rgba(245, 3, 53, 0.39);
    font-family: Noto Serif;
    font-size: 67.425px;
    font-style: normal;
    font-weight: 700;
  }

  .valor {
    color: #F61F4B;
    font-family: Noto Serif;
    font-size: 67.425px;
    font-style: normal;
    font-weight: 500;
  }

  .local {
    color: #474747;
    text-shadow: 0px 1px 3px rgba(245, 3, 53, 0.31);
    font-family: Inter;
    font-size: 20.888px;
    font-weight: 700;
    letter-spacing: 2.089px;
    margin-left: 80px;
  }

`

export const WrappFooter = styled.div`
    margin-top: -80px; 
`

