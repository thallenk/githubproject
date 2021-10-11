import styled from 'styled-components'
import coloredStar from '../../assets/images/coloredStar.png'


export const Head = styled.header`
    position: absolute;
    left: 0%;
    right: 0%;
    top: -3.33%;
    bottom: -3.33%;
    background: #FFFFFF;
    height: 64px;
    width: 100%;
    left: 0px;
    top: -2px;
    border-radius: 0px;
    .imgGit{
        position: absolute;
        width: 24px;
        height: 24px;
        left: 51px;
        top: 17px;
    }
    .component2{
        position: absolute;
        width: 113px;
        height: 21px;
        left: 103px;
        top: 19.5px;

        font-family: SF Pro Text;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
  
        display: flex;
        align-items: center;
        text-align: center;

        color: #6B6C7E;
    }
`

export const Container = styled.div`
    position: absolute;
    width: 883px;
    height: 64px;
    left: 229px;
    margin-left:50px;
    .filter{
        width:100px;
    }
    .filter button{
        margin-left:-22px;
        display:relative;
        width:100px;
    }
    .plus{
        align-items: center;
        padding: 0px;
        float:right;
        width: 16px;
        height: 16px;
        margin-top: -30px;
        margin-right:120px;
        
    }
    .plus button{
        border:none;
        cursor:pointer;
    }
    .search input {
        /*Colocando o ícone de buscando para não repetir*/
        margin-left: 120px;
        height: 40px;
        width: 419px;
        margin-top:-4px;
        padding: 15px;
        font-size: 15px;
        border: 1px solid #d6d6d6;
        border-style: ridge;
        background-color: transparent;
        border-right: none;
        position: absolute;
    }
    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    #searchButton{
        cursor: pointer;
        margin-top:-4px;
        padding: 10px;
        margin-left:520px;
        height: 40px;
        background-color:transparent;
        border: 1px solid #d6d6d6;
        border-left:none;
    }
    .star{
        background-color: transparent;
        margin-left: 67%;
        margin-top:-3.2%;
    }
    .star button {

        background-color: transparent;
        border: none;
        cursor:pointer;
    }
    .adjust{
    background-color: transparent;
    margin-left: 72%;
    margin-top:-2.3%;
    }
    .adjust button {
    background-color: transparent;
    border: none;
    cursor:pointer;
    }
    .cards{
    background-color: transparent;
    margin-left: 77%;
    margin-top:-2.3%;
    }
    .cards button {
    background-color: transparent;
    border: none;
    cursor:pointer;
    }
    /* Dropdown Button */
    .dropbtn {
    background-color: white;
    color: #6B6C7E;
;
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    height:32px;
    width:154px;
    margin-left: -20px;
    cursor:pointer;
    img{
        margin-left: 10px;
    }
    }
    /* The container <div> - needed to position the dropdown content */
    .dropdown {
    height:32px;
    width:154px;
    position: relative;
    display: inline-block;
    margin-left: -20px;
    margin-top: 15px;
    }
    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    }
    /* Links inside the dropdown */
    .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    }
    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #ddd;}
    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {display: block;}
`

export const Content = styled.div`
    margin-left: 20px;
    margin-top:-30px;
    #starButton:checked::before{
        background-image: url(${coloredStar})
    }
`