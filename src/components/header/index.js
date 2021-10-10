import React, {useState} from 'react'
import {Head, Container, Content} from './styles'
import vector from '../../assets/images/vector.png'
import plus from '../../assets/images/plus.png'
import star from '../../assets/images/star.png'
import cards2 from '../../assets/images/cards2.png'
import adjust from '../../assets/images/adjust.png'
import caret from '../../assets/images/caret.png'
import search from '../../assets/images/icone-search.png'
import {NewRepository} from '../newRepository'
import { useDispatch, useSelector } from 'react-redux'
import { filterByLastCommit, 
    filterByStars, 
    filterByForks, 
    filterByOpenIssues, 
    filterByAge, 
    listRepositories, 
    filterBySearch, 
    // filterRepoStar,
    dispatchUpdate,
    dispatchUpdateSelector} from '../../store/repositoriesStore'
import { useHistory } from 'react-router'

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const [searched, setSearched] = useState('')
    const history = useHistory()
    const data = useSelector(listRepositories)
    const dispatchStarUpadated = useSelector(dispatchUpdateSelector)
    console.log('dispatchStarUpadated', dispatchStarUpadated)

    console.log('search',searched)
    const dispatch = useDispatch()
    // console.log('teste2',data?.sort((a,b) => b.stargazers_count - a.stargazers_count))
    function handleStart(){

    }
    function handleFilterStar(){
        const newData = [...data]?.sort((a,b) => b.stargazers_count - a.stargazers_count )
        dispatch(dispatchUpdate(newData))
    }
    function handleFilterLastCommit(){
        const newData = [...data]?.sort((a,b) => b.updated_at - a.updated_at )
        dispatch(dispatchUpdate(newData))
    }
    function handleFilterByForks(){
        const newData = [...data]?.sort((a,b) => b.forks_count - a.forks_count )
        dispatch(dispatchUpdate(newData))
    }
    function handleFilterByOpenIssues(){
        const newData = [...data]?.sort((a,b) => b.open_issues_count - a.open_issues_count)
        dispatch(dispatchUpdate(newData))
    }
    function handleFilterByAge(){
        const newData = [...data]?.sort((a,b) =>  Date.parse(b.created_at.substring(10, 0)) - Date.parse(a.created_at.substring(10, 0)))
        dispatch(dispatchUpdate(newData))
    }
    function handleFilterBySearch(){
        if(data.filter(data => data.full_name === searched)){
            dispatch(filterBySearch(searched))
        }else {
            history.push('/empty')
        }
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
                        <a href="#" onClick={handleFilterByForks}>Forks</a>
                        <a href="#" onClick={handleFilterByOpenIssues}>Open Issues</a>
                        <a href="#" onClick={handleFilterByAge}>Age</a>
                        <a href="#" onClick={handleFilterLastCommit}>Last Commit</a>
                    </div>
                </div>
                <Content>
                    <div className='search'> 
                    <input 
                    value={searched}
                    onChange={ e => setSearched(e.target.value)}
                    placeholder = 'Search' type='text'/>
                    <button id='searchButton' onClick={handleFilterBySearch}>
                        <img id='searchImg' src={search} alt="star" />
                    </button>
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