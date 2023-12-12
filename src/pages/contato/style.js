import styled from 'styled-components';
import bgHome from '../../assets/images/bgsobre.webp'

export const SectionHome = styled.section`
    

    .bg {
        height: 80vh;
        background-image: url(${bgHome});
        background-position: center;
        background-size: cover;
    }

    .contato {
        width: 1440px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: -287px;
    }

    .wrappText > .title {
        color: #FFF;
        font-family: Noto Serif;
        font-size: 61px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .wrappText > .text {
        color: #FFF;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.783px;
        max-width: 400px;
    }

    .wrappContato > .wrappIcons {
        display: flex;
        align-items: center;
        margin-top: 121px;
        gap: 20px;
    }

    .wrappContato > .wrappText {
        max-width: 378px;
    }

    .wrappText > .titleVisit {
        color: #F61F4B;
        font-family: Noto Serif;
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 20px;
        margin-top: 77px;
    }

    .wrappText > .textVisit {
        color: #363636;
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .wrappContato > .wrappLocais {
        margin-top: 200px;
        transform: rotate(-90deg);
        position: relative;
        right: 172px;     
    }

    .wrappLocais > .wrapp {
        display: flex;
        justify-content: space-between;
        position: relative;
        bottom: 11px;
        right: 1px;
        width: 351px;
    }

    .wrappLocais > hr {
        width: 313px;
        position: relative;
        /* right: 172px; */
    }

    .wrapp > .locais {
        position: relative;
        right: 11px;
        transform: rotate(90deg);
        display: flex;
        align-items: center;
        gap: 13px;
        margin: -135px;
        top: 158px;
    }

    .locais > img{
        width: 35px;
    }

    .locais > .wrapptext {
        display: flex;
        flex-direction: column;
        width: 280px;
    }

    .wrapptext > .endereco{
        color: #F61F4B;
        font-size: 20px;
        line-height: 140.1%; /* 35.3px */
        width: 327px;
        font-family: NoyhRW01-Medium;
        font-weight: 500;
    }

    .wrapptext > .phone{
        color: #484848;
        font-size: 18px;
        line-height: 140%; /* 35.275px */
        font-family: NoyhRW01-Medium;
        font-weight: 500;
    }

    .wrappForm {
        margin-top: 90px;
    }

    .wrappForm > .texEmail {
        display: flex;
        align-items: center;
        border-radius: 7.214px;
        background: #F3F3F3;
        box-shadow: -8.41681px 7.21441px 24.04803px 0px rgba(0, 0, 0, 0.25);
        padding: 20px 40px;
    }

    .texEmail > img {
        width: 70px;
    }

    .texEmail > .text {
        color: #212121;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        max-width: 310px;
        margin-left: 20px;
    }

    .wrappForm > form {
        display: flex;
        flex-direction: column;
        padding-top: 8px;
        padding-bottom: 30px;
    }

    form > .wrappInput {
        display: flex;
        flex-wrap: wrap;
        width: 400px;
        gap: 15px;
        margin: 0 auto;
        /* max-width: 400px; */
    }

    .wrappInput > input{
        border-radius: 5px;
        background: #F2F2F2;
        width: 175px;
        height: 35px;
        border: none;
        padding-left: 15px;
        font-family: Inter;
        font-size: 13px;
    }

    .wrappInput > input::placeholder {
        color: #7e7e7e;
    
    }

    form {
        background: white;
        border-radius: 7.214px;
        box-shadow: -8.41681px 7.21441px 24.04803px 0px rgba(0, 0, 0, 0.25);
        margin-top: 25px;
        /* padding: 20px 40px; */
    }

    form > textarea {
        border-radius: 5px;
        background: #F2F2F2;
        border: none;
        padding-left: 15px;
        padding-top: 15px;
        font-family: Inter;
        font-size: 13px;
        resize: none;
        width: 400px;
        height: 290px;
        margin: 0 auto;
    }

    form > textarea::placeholder {
        color: #7e7e7e;
        font-size: 13px;
    }

    form > .titleForm {
        color: #555;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 400px;
        margin: 0 auto;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    form > .button {
        max-width: 400px;
        width: 100%;

        margin: 0 auto;
        margin-top: 40px;
        border-radius: 5px;
        background: #F61F4B;
        border: none;
        padding: 10px 0;
        color: white;
        font-family: Inter;
        font-size: 18px;
    }
`

export const SectionFAQ = styled.section `
    margin: 0 auto;
    margin-top: 250px;
    margin-bottom: 200px;
    max-width: 1440px;

    .row-title-text {
        color: #F61F4B;
        font-family: Inter;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        user-select: none;  
    }

    .faq-row {
        margin: 0 auto;
        margin-bottom: 50px;
        max-width: 915px;
        border-bottom: 1px solid #F61F4B;
    }


    .styles_row-content__QOGZd[aria-expanded="true"] {
        background: rgba(255, 235, 239, 0.61);
    }

    .row-title[aria-expanded="true"] {
        background: rgba(255, 235, 239, 0.61);
    }

   

    .arrow-image > svg {
        fill: white !important;
        background-color: #F61F4B;
        border-radius: 100%;
    }

    .styles_row-content-text__2sgAB {
        color: #363636;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 30px;
    }

    .title {
        color: #F61F4B;
        font-family: Noto Serif;
        font-size: 47px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 70px;
    }
`