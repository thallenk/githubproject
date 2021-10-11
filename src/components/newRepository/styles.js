import styled from 'styled-components'

export const Box = styled.div`
    height: 212px;
    width: 448px;
    position: absolute;
    top: 62px;
    margin-left:60%;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(39, 40, 51, 0.12);
    border-radius: 4px;
    h3{
        margin-left: 5%;
        font-size: 18px;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }
    fieldset{
        border:none;
        margin-top:3%;
        margin-left:5%;
    }
    form label{

        font-family: SF Pro Text;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }
    input {
        height: 40px;
        width: 400px;
        top: 25px;
        border-radius: 4px;
                
 
        background: #F0F5FF;
        border: 1px solid #80ACFF;
    }
    button{
        margin-top:10%;
        float:right;
        padding:10px;
        width:72px;
        height:32px;

        background: #FFFFFF;

        border: 1px solid #CDCED9;
        box-sizing: border-box;
        border-radius: 4px;
        text-align:center;
        
    }
    .addButton{
        background: #0B5FFF;
        margin-left:10px;
        margin-right: 5%;
        width:52px;
        color:white;
    }
`


export const ErroMsg = styled.span`
display: block;
font-size: 0.7rem;
color: red;
font-weight: 600;
margin-top: 1rem;
`
