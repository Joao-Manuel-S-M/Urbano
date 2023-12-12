import { styled } from "styled-components";
import font from '../../assets/fonts/Noyh.ttf'


export const Header = styled.header`
//
z-index: 200;
  position: absolute;
  left: 0;
  right: 0;
//
    @font-face {
        font-family: NoyhRW01-Medium;
        src: url('${font}') format('truetype');
    }
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1440px;
    width: 95vw;
    align-items: center;
    margin: 0 auto 0 auto;
    padding-top: 10px;

    .title {
        color: #FFF;
        font-family: NoyhRW01-Medium;
        font-size: 51px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    a {
        color: rgba(255, 255, 255, 0.80);
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
        padding-left: 48px;
    }

     
 
    .active {
        color: #FFF;
        font-weight: 600;
    }

    .btn-menu {
        display: none;
        cursor: pointer;
        float: right;
        z-index: 12;
        position: absolute;
        right: 20px;
        top: 20px;
        
    }

    .btn-menu .lines {
        width: 35px;
        height: 3px;
        background-color: #ffff;
        border-radius: 20px;
        margin-bottom: 7px;
        transition: .3s;
        z-index: 400;
        position: relative;
        top: 0;
        left: 0;
        right: 0;
    }

    .line1 {
        transform: rotate(-45deg) translate(-8px, 8px);
    }

    .line2 {
        opacity: 0;
    }

    .line3 {
        transform: rotate(45deg) translate(-5px, -7px);
    }

    .btn-fixed {
        position: fixed;
    }

    .background .title {
        display: none;
    }

    .background {
        display: none;
    }


 
    @media (max-width: 600px) {
        nav {
            display: none;
        }

        .btn-menu {
            display: block;
            
        }

        .background {
            display: flex;
            background: #F61F4B;
            z-index: 10;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            left: 642px;
            transition: .5s;
        }

        .show-background {
            left: 0;
        }

        .background a {
            /* display: flex; */
            padding-left: 0;
            padding-top: 91px;
            font-weight: 500;
            font-size: 19px;
        }

        .background .title {
            display: block;
            position: absolute;
            top: 102px;
            left: 0;
            right: 0;
        }
    

    }

`