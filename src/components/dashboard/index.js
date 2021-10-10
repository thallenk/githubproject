import React, {useEffect, useState} from 'react'
import {Box, List, ListItem} from './styles'
import trash from '../../assets/images/trash.png'
import star from '../../assets/images/star.png'
import logo from '../../assets/images/logo.png'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dataHelperSelector, deleteRepo, dispatchStarSelector, dispatchUpadate, dispatchUpdateSelector, filterByStars, filterByStarSelector, idsSelector, listRepositories } from '../../store/repositoriesStore'


export default function BoxRepository() {

    const history = useHistory();
    const dispatch = useDispatch()
    const dataOriginal = useSelector(listRepositories)
    const dispatchUpdate = useSelector(dispatchUpdateSelector)
    const data = useSelector( dispatchUpdate ? dataHelperSelector: listRepositories)
    const loading = useSelector(state => state.repo.loading)
    const ids = useSelector(idsSelector)
    console.log('loading', loading)
    console.log('dataHelper', data)
    console.log('dataOriginal', data)


    if(dataOriginal[0] === undefined && loading === false){
        history.push('/')
    }

    function handleDelete(prop) {
        const deleted = dataOriginal?.filter((data) => data.id === prop)
        console.log('delete',deleted)
       dispatch(deleteRepo(deleted))
    }
    function handleStar(prop){
        dispatch(filterByStars(prop))
    }
    console.log('ids',ids)
    return(
        <Box>
            {data?.map((itemAtual) => {if(itemAtual.id){
            return(
            <List>
            <div className='content'>
                
                    {console.log('key',itemAtual.homePage)}
                    <img src={logo} alt='logo'/>
                    <p id='fullName'>{itemAtual?.full_name}</p>
                    <button id='starButton' onClick={(e) => handleStar(itemAtual?.id)}>
                        <img id='starImg' src={star} alt="star"  />
                    </button>
                    <button
                    onClick={(e) => handleDelete(itemAtual?.id)}
                    >
                        <img id='trash' src={trash} alt="trash" />
                    </button>
            </div>
                <ListItem key= {itemAtual?.id}>
                    <p> Star: {itemAtual?.stargazers_count}</p>
                    <p> Forks: {itemAtual?.forks_count}</p>
                    <p> Open Issues: {itemAtual?.open_issues_count}</p>
                    <p>Age: {new Date().getFullYear() - itemAtual?.created_at.substring(4, 0)}</p>
                    <p>Last Commit: {itemAtual?.updated_at.substring(10, 0)}</p>
                    <p>License: {itemAtual?.license}</p>
                    <p className='lang'>{itemAtual?.language}</p>
                    {/* <span>{itemAtual.repositoriesAge}</span>
                    <span>{itemAtual.repositoriesLastCommit}</span>
                    <span>{itemAtual.repositoriesLicense}</span>
                    <span>{itemAtual.repositoriesLanguage}</span> */}
                </ListItem>
            </List>
                )}})}

        </Box>
    
                )
                }