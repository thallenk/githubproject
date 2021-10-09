import React, {useState} from 'react'
import {Box, ErroMsg} from './styles'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepo, listRepositories, deleteRepo } from '../../store/repositoriesStore';


export function NewRepository(){
    //const[dados, setDados] = useState([{}])
    const history = useHistory();
    const [repository, setRepository] = useState('')
    const { error } = useSelector((state) => state.repo)
    const dispatch = useDispatch()
    //const [isOpen, setIsOpen] = useState(false)
    function closeRepository(){

    }
    function handleAdd(e){
      e.preventDefault()
        dispatch(fetchRepo(repository))
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

              // history.push('/repositories')
    }
    const  data  = useSelector(listRepositories)
    console.log('lista',data)

    var dataSort = data.reduceRight(function(arr, last, index, coll){
      return (arr = arr.concat(last))
    }, [])
    console.log('dataSort',dataSort)
  
    return(
        <>
        <Box id='box'>
            <h3>New Repository</h3>
            <form > 
                <fieldset>
                    <label>Repository *</label>
                    <input type="text" name='repository' value={repository} onChange={e => setRepository(e.target.value)}/>
                    { error  ? <ErroMsg>{error}</ErroMsg> : ''}
                </fieldset>
                <button className='addButton' type='button' onClick={handleAdd}>
                    Add
                </button>
                
            </form>
            <button onClick={closeRepository}>
                    Cancel
            </button>
        </Box>
         </>
    )
}