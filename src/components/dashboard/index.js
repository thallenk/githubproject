import React, {useEffect, useState} from 'react'
import {Box, List, ListItem} from './styles'
import trash from '../../assets/images/trash.png'
import star from '../../assets/images/star.png'
import logo from '../../assets/images/logo.png'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { listRepositories } from '../../store/repositoriesStore'


export default function BoxRepository() {
    const history = useHistory();
    const dadosRepositories = useSelector(listRepositories)
    console.log(dadosRepositories.map((dado) => dado.language))
    console.log('dadosRepo', dadosRepositories)
    useEffect(()=>{
        if(dadosRepositories == null){
            history.push('/')
        }
    }, [])
            // const stars = response.data.stargazers_count
            // const fullname = response.data.full_name
            // const forks = response.data.forks_count
            // const openIssue = response.data.open_issues_count
            // const fullAge = response.data.created_at
            // const age = new Date().getFullYear() - fullAge.substring(4, 0)
            // console.log(age)
            // const lastCommit = response.data.updated_at.substring(10, 0)
            // const license = response.data.license
            // const language = response.data.language

    return(
        <Box>
            {dadosRepositories.map((itemAtual)=>{
            return(
            <List>
            <div className='content'>
                    <img src={logo} alt='logo'/>
                    <p>{itemAtual.full_name}</p>
                    <button>
                        <img id='starImg' src={star} alt="star" />
                    </button>
                    <button>
                        <img id='trash' src={trash} alt="trash" />
                    </button>
            </div>
                <ListItem key= {itemAtual.id}>
                    <p> Star: {itemAtual.stargazers_count}</p>
                    <p> Forks: {itemAtual.forks_count}</p>
                    <p> Open Issues: {itemAtual.open_issues_count}</p>
                    <p>Age: {new Date().getFullYear() - itemAtual.created_at.substring(4, 0)}</p>
                    <p>Last Commit: {itemAtual.updated_at.substring(10, 0)}</p>
                    <p>License: {itemAtual.license}</p>
                    <p className='lang'>{itemAtual.language}</p>
                    {/* <span>{itemAtual.repositoriesAge}</span>
                    <span>{itemAtual.repositoriesLastCommit}</span>
                    <span>{itemAtual.repositoriesLicense}</span>
                    <span>{itemAtual.repositoriesLanguage}</span> */}
                </ListItem>
            </List>
                )})}

        </Box>
    
                )
                }