import { styled } from "styled-components";
import icon from "../../assets/images/iconselect.svg";

export const WrapperAll = styled.section`
  position: absolute;
  left: 0;

  
`


export const Container = styled.div`
  background-color: #fbfbfb;
  width: 100vw;
  z-index: 1000;
  position: absolute;
  overflow-x: hidden;
  
  
  filter: ${props => props.blur === true ? 'blur(10px)' : ''};
  
  .title {
    max-width: 1440px;
    margin: 50px auto 0 auto;
    color: #474747;
    font-family: Inter;
    font-size: 25px;
    font-weight: 600;
  }

  

  @media (max-width: 480px) {
    .title {
      text-align: center;
      font-size: 5vw;
      margin: 38px 20px 0 20px;
    }    
  }


`;

export const Header = styled.div`
  max-width: 1440px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  gap: 45%;

  @media (max-width: 400px) {
    max-width: 55vw;
    margin: 18px 0;
    scale: 0.9;
  }

  .btn-voltar {
    background-color: #f61f4b;
    padding: 10px;
    border-radius: 100%;
    display: inline-flex;
    cursor: pointer;
  }

  .logo {
    font-family: NoyhRW01-Medium;
    font-size: 25px;
    text-align: center;
    color: #f6f6f6;
    padding: 8px 30px;
    border-radius: 30px;
    background-color: #f61f4b;
  }
`;

export const Infs = styled.div`
  max-width: 1440px;
  margin: 20px auto;
  color: #212121;
  font-family: "Inter";
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;

  img {
    width: 30px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    font-size: 12px;
  }
`;



export const GridImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  flex-wrap: wrap;

  .wrapper-images {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 1285px) {
    gap: 0;
    .wrapper-images {
      flex-direction: row;
      
    }

    .img1 {
      width: 95vw;
    }

    .img2 {
      width: 47.5vw;
    }

    .img3 {
      width: 47.5vw;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 50px auto 50px auto;
  font-family: Inter;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1440px) {
    padding: 0 2vw;
  }

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    .container {
      width: 90vw !important;
    }
  }




  .infs {
    color: #212121;
  }

  .infs h1 {
    font-size: 30px;
  }

  .infs span {
    font-size: 16px;
    display: inline-flex;
    margin-top: 10px;
  }

  @media (max-width: 377px) {
    .infs h1 {
      font-size: 7vw;
    }
    
    .infs span {
      font-size: 5vw;
    }
  }

  .container {
    width: 55vw;
  }
`;

export const Line = styled.hr`
  opacity: 10%;
  max-width: 100%;
  margin: 36px 0;
  color: rgba(33, 33, 33, 0.74);
`;

export const Desc = styled.div`
  .item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 32px;
  }



  .item-oferece {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 32px;
  }

  @media (max-width: 1000px) {
    .item {
      justify-content: center;
      flex-direction: column;
    }

    .item-oferece {
      flex-direction: column;
  }

    .caracteristicas {
      flex-direction: column;
      align-items: center;
      margin-top: 42px;
    }

    .wrapperright, .wrapperleft {
      max-width: 271px;
    }
  }

  h1 {
    font-size: 18px;
    color: #383838;
  }

  span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.59);
  }

  .descricao {
    color: #383838;
    font-family: Inter;
    font-size: 16.4px;
    line-height: 165.523%; /* 32.597px */
  }

  @media (max-width: 290px) {
    .descricao {
      font-size: 12px;
    }    
  }

  .caracteristicas {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 759px;
    
  }

  .subtitle {
    color: #383838;
    font-size: 25.82px;
    margin-bottom: 30px;
  }

  .caracteristicas h1{
    color: #383838;
    font-size: 14.818px;
    font-weight: 400;
  }
  
`;

export const Card = styled.div`
  background-color: white;
  box-shadow: 1px 4px 7px 0px rgba(0, 0, 0, 0.25);
  max-width: 426px;
  width: 100%;
  height: min-content;
  padding: 15px 33px;
  border-radius: 19px;

  .data {
    display: flex;
    flex-direction: column;
  }

  button {
    border: none;
  }


  .price-header {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 18.291px;
    font-weight: 500;
  }

  @media (max-width: 290px) {
    text-align: initial;
  }

  .price {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    color: #212121bb;
  }

  @media (max-width: 290px) {
    .price {
      flex-wrap: wrap;
      justify-content: center; 
    }
  }

  hr {
    margin: 40px 0;
    border-color: #21212129;
    opacity: 0.5;
  }

  .valorTotal {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    color: #212121;
    font-size: 17.328px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  /* Select Styles */
  .css-13cymwt-control {
    border-color: #f61f4b;
    height: 44px;
    border-radius: 4px;
    padding: 0 5px;
  }

  @media (max-width: 290px) {
    text-align: initial;
  }

  .css-t3ipsp-control {
    border-color: #f61f4b;
    height: 44px;
    border-radius: 4px;
    padding: 0 5px;
    box-shadow: none;
  }

  .css-t3ipsp-control:hover {
    border-color: #e290a0;
    height: 44px;
    border-radius: 4px;
    padding: 0 5px;
    box-shadow: none;
  }

  .css-d7l1ni-option {
    background-color: #ffe6eb;
  }

  .css-tr4s17-option {
    background: #f61f4b;
  }

  .css-13cymwt-control:hover {
    border-color: #f61f4b;
    height: 44px;
    border-radius: 4px;
    padding: 0 5px;
  }

  .css-1dimb5e-singleValue {
    color: #212121;
    font-family: Inter;
    font-size: 14.44px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .css-1u9des2-indicatorSeparator {
    display: none;
  }

  .css-1xc3v61-indicatorContainer {
    color: #474747;
    opacity: 0.5;
  }
  /* ... */

  .button {
    border-radius: 3.851px;
    background: #f61f4b;
    color: #fff;
    font-family: "Inter";
    font-size: 17px;
    width: 100%;

    padding: 10px 0;
    margin-top: 20px;
    margin-bottom: 41px;
    display: inline-flex;
    justify-content: center;
    text-decoration: none;
    transition: .3s;
    cursor: pointer;
  }

  .button:hover {
    background: #EC0E3B;
    transition: .3s;
    box-shadow: 0px 0px 20.7px 0px rgba(0, 0, 0, 0.30);
  }
`;
