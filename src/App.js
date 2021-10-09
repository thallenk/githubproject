import Routes from './routes';
import { createGlobalStyle} from 'styled-components'



const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  body {
    height: 700px;
    width: 100%;
    position: relative;
    background: #F1F2F5;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    
  }
`;


function App() {
  return (
      <>
      <GlobalStyle />
      <Routes/>
      </>
  );
}

export default App;
