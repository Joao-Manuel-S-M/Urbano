import { styled } from "styled-components";


export const  Container = styled.div`

    max-width: 507px;
    height: 51px;
    flex-shrink: 0;
    background-color: #E6E6E6;
    border-radius: 67px;
    border: 1px solid #F61F4B;
    background: #E6E6E6;
    display: flex;
    margin-top: 25px;
    

    input {
        width: 86%;
        border-radius: 67px;
        background: none;
        border: none;
        color: #636363;
        font-family: 'inter';
        font-size: 19px;
        margin-left: 20px;
    }

    input:placeholder-shown{
        font-size: 15px;
    }

    input:focus{
        outline: 0;
        
    }
`;