import styled from "styled-components";
import bg from '../../assets/images/bgcard.svg'
import 'react-day-picker/dist/style.css';


export const Button = styled.div`
    float: right;
    margin-right: -90px;
    margin-top: 2px;
    background-color: #F61F4B;
    font-weight: 800;
    color: white;
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 100%;
    cursor: pointer;
    scale: .8;
    transition: .3s;

    &:hover {
        background: #EC0E3B;
        transition: .3s;
        box-shadow: 0px 0px 20.7px 0px rgba(0, 0, 0, 0.30);
    }
`

export const Card = styled.div`
    font-family: 'Ubuntu';
    max-width: 1022px;
    height: 640px;
    margin: 0 auto;
    border-radius: 18px;
    background: #FFF;
    box-shadow: 0px 0px 79.8px -7px rgba(0, 0, 0, 0.25);
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 2000;

    .ocult {
        display: none;
    }


    .wrappPagenation {
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        height: 640px;
        max-width: 299px;
        width: 100%;
    }

    .stage {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: 20px;
        margin-top: 30px;
        cursor: pointer;
        justify-content: unset;
        width: fit-content;
        padding: 9px 15px 9px 15px;
        border-radius: 10px;
        transition: .1s;
    }
    
    .stage:hover {
        background: #ffffff2e;
        transition: .1s;
    }

    .wrappText {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .wrappText > span {
        color: #F1E9DA;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: 4.42px;
        
    }

    .wrappText > h1 {
        color: #FFF;
        font-size: 17px;
        font-weight: 700;
        /* letter-spacing: -0.63px; */
    }

    .number {
        color: #FFF;
        border: 2px solid #FFF;
        font-family: Inter;
        font-size: 20px;
        font-weight: 600;
        border-radius: 100%;
        width: 41px;
        height: 41px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active {
        color: #F40637;
        background-color: #F8F3EA;
    }

    .wrappContent {
        margin-left: 55px;
        padding-top: 10px;
        width: 55%;
    }

    .wrappTitle h1 {
        color: #DC002D;
        font-size: 40px;
        font-weight: 500;
    }

    .wrappTitle p {
        color: rgba(255, 0, 52, 0.56);
        font-size: 17px;
        font-weight: 400;
        max-width: 530px;
    }

    .wrappForms {
        margin-top: 40px;
    }

    .wrappInput {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .wrappInput > span {
        color: #DC002D;
        font-size: 18px;
        font-weight: 400;
    }

    .inputError {
        border-left: 17px solid #FF3B63 !important;
        transition: .6s;
    }

    .wrappInput > input {
        border-radius: 11px;
        border: 1px solid #FF88A0;
        height: 44px;
        padding-left: 20px;
        color: #DC002D;
        font-size: 15px;
        font-weight: 500;
        transition: .6s;
    }
    
    .wrappInput > input::placeholder {
        color: #f06d87;
        font-size: 15px;
        font-weight: 500;
    }

    .wrappInput > input:focus {
        outline: 2px solid #f61f4b;
    }

    .next {
        border-radius: 5px;
        background: #F61F4B;
        width: 115px;
        height: 45px;
        color: white;
        border: none;
        font-family: 'Ubuntu';
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: .3s;
    }

    .next:hover {
        background: #EC0E3B;
        transition: .3s;
        box-shadow: 0px 0px 20.7px 0px rgba(0, 0, 0, 0.30);
    }

    .prev {
        border: none;
        font-family: 'Ubuntu';
        font-size: 14px;
        font-weight: 500;
        background: none;
        color: #F61F4B;
        cursor: pointer;
    }

    .wrappButtons {
        display: flex;
        justify-content: space-between;
        position: absolute;
        max-width: 562px;
        width: 100%;
        bottom: 23px;
    }

    // Calendar Style
    .footerCalendar {
        background: #f61f4b3b;
        padding: 8px 15px;
        margin-top: 9px;
        display: inline-flex;
        border-radius: 24px;
        border: 1px solid #e80c39b5;
        font-size: 13px;
        color: #e80c38ff;
        text-transform: uppercase;
    }

    .rdp-day_selected {
        color: white !important;
        background-color: #f61f4b;
    }

    .calendar {
        --rdp-background-color: #FF88A0;
        --rdp-color: #fff;
        --rdp-cell-size: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0;
    }

    .rdp-day:hover {
        color: white;
    }
    
    .rdp-button {
        color: #F61F4B;
    }

    /* .rdp-nav_button:hover {
        color: white;
    } */

    .rdp-button[disabled]:not(.rdp-day_selected) {
        opacity: 0.45;
    }

    .rdp-button[disabled]:not(.rdp-day_selected):hover {
        opacity: 0.45;
        color: #F61F4B;
    }

    .rdp-day {
        color: #F61F4B;
        font-weight: 500;
    }

    .rdp-head_cell {
        color: #F61F4B;
    }

    .rdp-caption_label {
        color: #F61F4B;
        text-transform: capitalize;
    }
    //

    .wrappOptions {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin: 70px 0;
    }

    .option {
        border-radius: 15px;
        border: 1px solid #FF5578;
        background: #FFF;
        box-shadow: 0px 4px 11.7px 0px rgba(0, 0, 0, 0.25);
        padding: 26px 30px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    .option > .Title, .price{
        color: #F61F4B;
        font-size: 20px;
        font-weight: 500;
    }

    .select {
        border: 5px solid #FF5578;
        padding: 22px 26px;
    }

    .wrappInfs {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 20px 0;
    }

    .wrappInfs > .infs {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .infs > .campo {
        color: #F61F4B;
        font-size: 20px;
        font-weight: 400;
    }

    .infs > .result {
        color: #F61F4B;
        font-size: 20px;
        font-weight: 300;
        text-align: end;
    }

    .separator {
        height: 1px;        
        background: rgba(246, 31, 75, 0.32);
        border: none;
    }

    .wrappPrice {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 30px 0;
    }
   
   .label {
        color: #F61F4B;
        font-size: 25px;
        font-weight: 500;
    }


    .container {
        max-width: 900px;
        width: 100vw;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    .container > h1 {
        color: #DC002D;
        font-size: 45px;
        font-weight: 500;
        margin-top: 50px;
    }
    
    .container > p {
        color: #FF5578;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        max-width: 617px;
        margin-top: 20px;
    }

    .icon {
        width: 80px;
        margin-top: 50px;
    }

    .resize {
        position: absolute;
        right: 17px;
        margin-right: -1px;
    }

    .line {
        max-width: 255px;
        width: 100vw;
        height: 2px;
        border: none;
        background: #FF5578;;
    }
`