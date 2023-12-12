import styled from "styled-components";
import background from '../../assets/images/bghome.webp'
import patternClientes from '../../assets/images/patternclientes.svg'
import patternSnake1 from '../../assets/images/patternsnake1.svg'
import patternSnake2 from '../../assets/images/patternsnake2.svg'
import font from '../../assets/fonts/Broadway.ttf'


export const Container = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;  
`

export const SectionPrincipal = styled.section`
    background-image: url(${background});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    font-family: Inter;

    @media (max-width: 750px) {
        background-position: center;

        .WrapperContent {
            text-align: center;
            margin: 220px auto 0 auto !important;
            width: 95vw;
        }

        .frase {
            margin: 0 auto;
            font-size: 8vw;
            text-shadow: 0px 6px 8px rgb(0, 0, 1) !important;
        }

        .text {
            margin: 0 auto;
            font-size: 4vw;
            text-shadow: 0px 6px 4px rgb(0, 0, 0) !important;
        }

        .icons {
            right: 50% !important;
            transform: translateX(50%) !important;
        }
    }

    .WrapperContent {
        max-width: 1440px;
        margin: 220px auto 0 8%;

    }

    @media (min-width: 1700px) {
        .WrapperContent {
            margin: 220px auto 0 auto;
        }
    }

    .frase {
        color: #FFF;
        text-shadow: 0px 6px 3px rgba(0, 0, 0, 0.25);
        font-family: Noto Serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        max-width: 450px;
    }

    .text {
        color: #FFF;
        text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.712);
        font-size: 15px;
        font-weight: 500;
        line-height: 182.2%; /* 38.262px */
        max-width: 620px;
        margin-top: 25px;
    }

    .button {
        height: 45px;
        margin-top: 20px;
    }

    .button img {
        width: 40px;
        position: relative;
        top: 7px;
        right: 17px;
    }

    .button a{
        border-radius: 3px;
        background: #F61F4B;
        color: #FFF;
        font-family: Inter;
        font-size: 15px;
        font-weight: 600;
        margin-top: 80px;
        text-decoration: none;
        padding: 13px 25px;
    }

    
    
    .icons {
        display: flex;
        justify-content: end;
        /* background: red; */
        gap: 20px;
        position: absolute;
        bottom: 20px;
        right: 4%;
    }

    

    @media (min-width: 1700px) {
        .icons{
            display: flex;
            justify-content: end;
            position: absolute;
            bottom: 20px;
            /* right: 0px; */
            left: 14%;
            width: 1440px;
        }
    }

    .icons a {
        background-color: #F61F4B;
        padding: 10px 10px 7px 11px;
        border-radius: 100%;
        height: min-content;
    }

    .icons a > img {
        width: 20px;
    }

    @media (max-width: 750px) {

        .WrapperContent {
            text-align: center;
            margin: 220px auto 0 auto !important;
            width: 95vw;
        }

        .icons {
            right: 50% !important;
            transform: translateX(50%) !important;
        }

        .button img {
            display: none;
        }

        @media (max-width: 450px) {

            .frase {
                font-size: 8vw;
            }

            
        }
    }

`

export const SectionClientes = styled.section`
    padding-bottom: 150px;
    background-image: url(${patternSnake1});
    background-repeat: no-repeat;
    background-size: 249px;
    background-position-y: -31px;
    background-position-x: -8px;
    background-color: #FAFAFA;

    .contentClientes {
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding-top: 50px;
    }

    .tituloClientes {
        color: #F61F4B;
        font-family: Bree Serif;
        font-size: 65px;
        font-weight: 400;
        margin-top: 60px;
    }

    .textClientes {
        color: #272727;
        font-family: NoyhRW01-Medium;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 113.2%; /* 23.659px */
        max-width: 650px;
    }

    .wrappLogos {
        display: flex;
        gap: 5px;
        margin-left: 29px;
    }

    .wrappImage {
        background-image: url(${patternClientes});
        background-size: 246px;
        background-repeat: no-repeat;
        width: 516px;
        background-position-x: 266px;
        padding-top: 30px;
        background-position-y: -31px;
    }

    .grupos {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .logo {
        background-color: red;
        width: 140px;
        height: 140px;
        display: flex;
        justify-content: center;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .logo img {
        width: 65%;
    }
    
    @media (max-width: 750px) {
        background-image: none;

        .contentClientes {
            max-width: 750px;
            text-align: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        .wrappImage {
            background-image: none;
            width: none;
        }

        .WrappText {
            max-width: 95vw;
        }

        .wrappLogos {
            margin: 0 auto;
            justify-content: center;
        }

        @media (max-width: 440px) {
            .wrappLogos {
                scale: 80%;
            }

            .tituloClientes {
                font-size: 10vw;
            }

            .textClientes {
                font-size: 3vw;
            }
        }

        @media (max-width: 320px) {
            .wrappLogos {
                scale: 60%;
            }

            .WrappText {
                margin-bottom: -60px;
            }
        }
    }
`

export const SectionAvaliacoes = styled.section`
    background-color: #FAFAFA;
    padding-top: 10px;
    background-image: url(${patternSnake2});
    background-repeat: no-repeat;
    background-size: 249px;
    background-position-x: 103%;

    .title {
        margin-top: 20px;
        margin-bottom: 40px;
        color: #F61F4B;
        font-family: Bree Serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
    }

    .containerSwiper {
        /* max-width: 1218px; */
        margin: 0 auto;
    }
   
    .swiper {
        max-width: 984px;
        height: 165px;
        
    }

   .swiper-slide {
        /* width: 430px !important; */
        max-width: 430px !important;
        height: 110px;
        border-radius: 10px;
        border-radius: 15px;
        background: #FAFAFA;
        
    }

    .swiper-slide-active {
        position: relative;
        bottom: 20px;
        z-index: 5;
        width: 540px !important;
        height: 120px;
        transition: .3s;
        box-shadow: 0px 5px 12px -3px rgba(0, 0, 0, 0.25);
    }

    .swiper-slide-prev {
        z-index: 3;
        margin-right: -180px;
        margin-left: 109px;
        box-shadow: 0px 5px 12px -3px rgba(0, 0, 0, 0.25);
        padding: 0 10px;
    }

    .swiper-slide-next {
        z-index: 3;
        margin-left: -180px;
        margin-right: 182px;
        box-shadow: 0px 5px 12px -3px rgba(0, 0, 0, 0.25);
        padding: 0 10px;
    }

    .swiper-wrapper {
        display: flex;
        align-items: center;
        margin: 0 auto;
        /* width: 1836px; */
    }

    .containerSlide {
        display: flex;
        align-items: center;
        height: 100%;
        max-width: 376px;
        margin: 0 auto;
        gap: 20px;
    }

    .nome {
        color: #262626;
        font-family: Bree Serif;
        font-size: 17px;
        font-weight: 400;
    }

    .avaliacao {
        color: #000;
        font-family: Inter;
        font-size: 10px;
        font-weight: 300;
        font-style: normal;
        max-width: 384px;
    }

    .wrappComent {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .pattern1 {
        float: right;
    }

    .pattern2 {
        margin-top: 112px;
    }

    .wrappPatterns {
        max-width: 820px;
        height: 181px;
        margin: 0 auto;
        position: relative;
        bottom: 163px;
    }

    @media (max-width: 750px) {
        background-image: none;
        .wrappPatterns {
            display: none;
        }

        /* .swiper {
            width: fit-content;
            height: 165px;
            max-width: 118vw;
            scale: 80%;
        }

        .swiper-slide-prev {
            margin-left: 0px;
        } */

       
    }

    @media (max-width: 750px) {
       .containerSwiper {
            max-width: 430px;
       }
        
        .swiper {
            max-width: 90%;
            height: 1105x;
        }
    
        .swiper-slide {
            width: 100%;
            max-width: 90vw;
            height: 110px;
            border-radius: 10px;
            border-radius: 15px;
            background: #FAFAFA;
        }
        
        .swiper-slide-active {
            position: static;
            z-index: 1;
            max-width: 100% !important;
            height: 110px;
            transition: none;
            box-shadow: 0px 5px 12px -3px rgba(0, 0, 0, 0.25);
        }

        .swiper-slide-prev {
            z-index: 1;
            margin-right: 0;
            margin-left: 0;
            box-shadow: 0px 5px 12px -3px rgba(0, 0, 0, 0.25);
            padding: 0;
        }

        .swiper-slide-next {
            z-index: 1;
            margin-left: 0;
            margin-right: 0;
            box-shadow: 0px 5px 12px -3px rgba(0, 0, 0, 0.25);
            padding: 0;
        }

        .containerSlide {
            max-width: 346px;
        }

        
        @media (max-width: 350px) {
            .swiper {
                height: fit-content;
                padding: 8px 0;
            }
            
            .swiper-slide {
                height: fit-content;
                padding: 32px 0px;
                margin-right: 20px;
            }
            
            .containerSlide {
                flex-direction: column;
                text-align: center;
            }
        }

        @media (max-width: 440px) {
            .title {
                font-size: 8vw;
                margin-bottom: 0;
                margin-top: -90px;
            }
        }
    }

            
    

`

export const SectionBeneficios = styled.section`
    padding-top: 50px;
    background-color: #FAFAFA;

    @font-face {
        font-family: Broadway;
        src: url('${font}') format('truetype');
    }

    .title {
        color: #F61F4B;
        font-family: Bree Serif;
        font-size: 39.26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        margin-bottom: 10px;
    }

    .text {
        color: #2D2D2D;
        font-family: NoyhRW01-Medium;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        max-width: 800px;
        margin: 0 auto;
        margin-bottom: 60px;
    }

    .motivos {
        display: flex;
        align-items: center;
        width: fit-content;
        margin: 0 auto;
        padding: 0 30px;
        gap: 25px;
        margin-bottom: 40px;
        scale: .9;
    }

    .titleMotivos {
        color: #272727;
        font-family: Noto Serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 3px;
        display: flex;
    }

    .textMotivos {
        color: #000;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 147.023%;
        max-width: 606.869px;
    }

    .number {
        color: #F61F4B;
        font-family: Broadway;
        font-size: 150px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    @media (max-width: 440px) {
        .title {
            font-size: 8vw;
        }

        .text {
            font-size: 3vw;
            max-width: 90vw;
        }

        .number {
            font-size: 30vw;
        }

        .titleMotivos {
            font-size: 7vw;
        }

        .textMotivos {
            font-size: 3vw;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 600px) {
        .motivos {
            flex-direction: column;
            text-align: center;
        }

        .wrappMotivos {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`