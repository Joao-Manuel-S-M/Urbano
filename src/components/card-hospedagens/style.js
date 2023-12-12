import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 30px;
    row-gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1400px;
`

export const Card = styled.div`
    /* background: blueviolet; */
    max-width: 270px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 395px;
    justify-content: center;
    transition: .2s;
    border-radius: 3%;
    cursor: pointer;
   
    &:hover {
        background-color: #F2F2F2;
        transition: .2s;
        box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.25);
    }

    .content-img {
        width: 247px;
        height: 275px;
        overflow: hidden;
        border-radius: 26px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: max-content;
        height: 100%;
    }

    
`

export const Decricao = styled.div`
    font-family: Inter;
    float: left;
    margin-top: 10px;
    max-width: 247px;
    width: 100%;

    h1 {
        color: #212121;
        font-size: 19px;
        margin: 0;
    }

    .inf {
        color: #777;
        font-size: 12px;
        float: left;
    }

    .preco {
        color: #212121;
        font-size: 12px;
        float: left;
    }
`