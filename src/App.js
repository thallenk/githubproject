import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepo, listRepositories, deleteRepo } from "./store/repositoriesStore";




function App() {

  const dispatch = useDispatch()

  const [repository, setRepository] = useState('')
  const [deleteRepos, setDeleteRepo] = useState('')


  function handleAdd() {
    dispatch(fetchRepo(repository))
  }
  

  const  data  = useSelector(listRepositories)
  console.log('lista',data)
 
  var dataSort = data.reduceRight(function(arr, last, index, coll){
    return (arr = arr.concat(last))
  }, [])
  console.log('dataSort',dataSort)

  function handleDelete() {
    const deleted = data.filter((data) => data.full_name === deleteRepos.toString)
    console.log(deleted)
    dispatch(deleteRepo(deleted))
  }
  return (
    <div className="App">
      <input
      type='text'
      value={repository}
      onChange={e => setRepository(e.target.value)}
      />
      <button
      onClick={handleAdd}>
        Add
      </button>
      <input
      type='text'
      value={deleteRepos}
      onChange={e => setDeleteRepo(e.target.value)}
      />
      <button
      onClick={handleDelete}>
        Delete
      </button>
      {/* <ul>
        {repositories.map(repo => <li>repo</li>)}
      </ul> */}
    </div>
  );
}

export default App;
