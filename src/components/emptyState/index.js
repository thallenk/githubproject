import {Container} from './styles'
import Dataset from '../../assets/images/Dataset.png'

export default function EmptyState(){
    return(
        <Container>
            <div className="Image">
                <img src={Dataset} alt="RepositorioVazio"/>
            </div>
            <div className ="Title">
                <p>There is still nothing here</p>
            </div>
            <div className="subTitle">
                <p>Add some repositories by clicking add new repository</p>
            </div>
        </Container>
    )
}