import styled from 'styled-components'


export const Box = styled.div`
  border-radius: 8px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 333px 333px 333px; 
  justify-content: center;
  flex-wrap: wrap;
  padding-top:80px;
  width:100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  
  .content{
    background-color:white;
    display:flex;
    flex-direction: row;
    height:50px;
  p{
    margin-top:5%;
    font-size:14px;
    font-family:  -apple-system, BlinkMacSystemFont, sans-serif;
    margin-right:60px;
  }
  button{
    margin-left:20px;
    margin-right:5px;
    background-color: transparent;
    border: none;
  }
  #starImg {
    cursor: pointer;
  }
  #trash{
    cursor: pointer;
  }
  #starButton{
    margin-top:15px;
    height:19px;


  }
  }
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family:  -apple-system, BlinkMacSystemFont, sans-serif;
    margin: .5rem;
`
export const ListItem = styled.li `
    margin: .2rem 0;
    background: white;
    color: black;
    font-size:14px;
    padding: .5rem;
    .lang{
      position: static;
      margin-top:5px;
      margin-bottom:5px;
      left: 4px;
      right: 4px;
      padding: .5px;
      font-family:  -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 600;
      font-size: 10px;
      width:68px;
      border: 2px solid #B95000;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      color: #B95000;
    }
`