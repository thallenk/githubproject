import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    width: 340px;
    height: 403px;
    left: 500px;
    top: 140px;
    .Image{
        position: absolute;
        left: 11.76%;
        right: 14.71%;
        top: 0%;
        bottom: 37.97%;
        height: 250px;
        width: 250px;
       
    }
    .Title{
        position: absolute;
        left: 17%;
        right: 0%;
        top: 71.96%;
        bottom: 21.84%;
 
        font-family: SF Pro Text;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 125%;

        display: flex;
    }
    .subTitle{

        position: absolute;
        left: 0%;
        right: 0%;
        top: 80.15%;
        bottom: 7.94%;

        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;

        text-align: center;

        color: #6B6C7E;
    }
    #button{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 16px;

        position: absolute;
        left: 32.5%;
        right: 32.5%;
        top: 90.07%;
        bottom: 0%;

        background: #FFFFFF;

        border: 1px solid #CDCED9;
        box-sizing: border-box;
        border-radius: 4px;
        
    }
    #buttonP{
        position: static;
        height: 24px;
        left: 0px;
        right: 0px;
        margin-top: -5px;

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;

        display: flex;
        align-items: center;
        text-align: center;
        color: #6B6C7E;

    }
`