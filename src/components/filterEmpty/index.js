import {Container} from './styles'
import Dataset from '../../assets/images/Dataset.png'
import { useHistory } from 'react-router'

export default function FilterEmpty(){
    const history = useHistory()
    return(
        <Container>
            <div className="Image">
                <img src={Dataset} alt="RepositorioVazio"/>
            </div>
            <div className ="Title">
                <p>Something went wrong!</p>
            </div>
            <div className="subTitle">
                <p>No results were found that matched</p>
            </div>
            <button onClick={history.push('/dashboard')}>
                Clear filter
            </button>
        </Container>
    )
}