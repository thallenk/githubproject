import React, {useState} from 'react'
import {Head, Container, Content} from './styles'
import vector from '../../assets/images/vector.png'
import plus from '../../assets/images/plus.png'
import star from '../../assets/images/star.png'
import cards2 from '../../assets/images/cards2.png'
import adjust from '../../assets/images/adjust.png'
import caret from '../../assets/images/caret.png'
import {NewRepository} from '../newRepository'
import { useDispatch } from 'react-redux'
import { filterByStars } from '../../store/repositoriesStore'

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    function handleStart(){

    }
    function handleFilterStar(){
        dispatch(filterByStars())
    }
    return(
        <>
        <Head>
            <div>
                <img src={vector} alt="github" className="imgGit"/>
            </div>
            <div className="component2">
                <p>Github Compare</p>
            </div>
            <Container>
                <div className="dropdown">
                    <button className="dropbtn">Filter and order 
                    <img src={caret} alt='guia'/></button>
                    <div className="dropdown-content">
                        <p>ORDER BY</p>
                        <a href="#" onClick={handleFilterStar}>Stars</a>
                        <a href="#">Forks</a>
                        <a href="#">Open Issues</a>
                        <a href="#">Age</a>
                        <a href="#">Last Commit</a>
                    </div>
                </div>
                <Content>
                    <div className='search'> 
                    <input placeholder = 'Search' type='text'/>
                    </div>
                    <div className='star'>
                    <button onClick={handleStart}>
                        <img id='starImg' src={star} alt="star" />
                    </button>
                    </div>
                    <div className='adjust'>
                    <button onClick={handleStart}>
                        <img src={adjust} alt="ajuste" />
                    </button>
                    </div>
                    <div className='cards'>
                    <button onClick={handleStart}>
                        <img  src={cards2} alt="cards" />
                    </button>
                    </div>
                    <div className="plus">
                        <button className='plusButton' onClick={()=> setIsOpen(!isOpen)}>
                            <img src={plus} alt="plus" />
                        </button>
                    </div>

                    </Content>

            </Container>
        </Head>
        {isOpen && (<NewRepository/>)}
        </>
    )
}