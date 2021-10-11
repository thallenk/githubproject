import React, {useState} from 'react'
import {Box, ErroMsg} from './styles'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepo, listRepositories } from '../../store/repositoriesStore';


export function NewRepository(){

    const history = useHistory();
 
    const [repository, setRepository] = useState('')

    //error on fetch api
    const { error } = useSelector((state) => state.repo)
    const dispatch = useDispatch()
  

    //dispatch to fetchRepo where the request is made with fetch
    function handleAdd(e){
        e.preventDefault()
        dispatch(fetchRepo(repository))
        history.push('/repositories')
    }

    //Select dataOriginal and take the length to make the error logic
    const  data  = useSelector(listRepositories)
    const index = data?.length - 1
    
  
    return(
        <>
        <Box id='box'>
            <h3>New Repository</h3>
            <form > 
                <fieldset>
                    <label>Repository *</label>
                    <input type="text" name='repository' value={repository} onChange={e => setRepository(e.target.value)}/>

                    {/* trating the error fetch case and put it on frontend */}
                    { error || data[index]?.message === 'Not Found'  ? <ErroMsg>{error || 'This is an API-feedback-error'}</ErroMsg> : ''}
                </fieldset>
                <button className='addButton' type='button' onClick={handleAdd}>
                    Add
                </button>
                
            </form>
            <button >
                    Cancel
            </button>
        </Box>
         </>
    )
}