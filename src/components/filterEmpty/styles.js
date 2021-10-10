import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    width: 340px;
    height: 403px;
    left: 500px;
    top: 204px;
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
        /* 20/Bold */
        font-family: SF Pro Text;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 125%;
        /* identical to box height, or 25px */
        display: flex;
    }
    .subTitle{
        /* Description */
        position: absolute;
        left: 0%;
        right: 0%;
        top: 80.15%;
        bottom: 7.94%;
        /* 16/Regular */
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        /* or 24px */
        text-align: center;
        /* Secondary/$secondary */
        color: #6B6C7E;
    }
`