import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'repo',
  initialState: {
    loading: false,
    data: [],
    dataHelper: null,
    error: null,
    dispatchUpdate: false
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
      state.dispatchUpdate = false;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.data?.push(action.payload);
      state.dispatchUpdate = false;
     
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = [...state.data];
      state.error = action.payload;
      state.dispatchUpdate = false;
    },
    deleteRepo(state, action) {
        state.loading = false;
        state.data.splice(state.data.indexOf(action.payload),1);
        state.error = false;
        state.dispatchUpdate = false;
    },
    filterByStars(state, action) {
      state.loading = false;
      state.data = [...state.data];
      state.dataHelper?.sort((a,b) => b.stargazers_count - a.stargazers_count );
      state.error = false;
      state.dispatchStar = true
    },
    filterByForks(state) {
      state.loading = false;
      state.data.sort((a,b) => a.forks_count - b.forks_count );
      state.error = false;
    },
    filterByOpenIssues(state) {
      state.loading = false;
      state.data.sort((a,b) => a.open_issues_count - b.open_issues_count );
      state.error = false;
    },
    filterByAge(state) {
      state.loading = false;
      state.data?.sort((a,b) => Date.parse(a.created_at.substring(10, 0)) - Date.parse(b.created_at.substring(10, 0)));
      state.error = false;
    },
    filterByLastCommit(state) {
      state.loading = false;
      state.data.sort((a,b) => b.updated_at - a.updated_at );
      state.error = false;
    },
    filterBySearch(state, action) {
      state.loading = false;
      state.data.filter((data) => data.full_name === action.payload);
      state.error = false;
    },
    dispatchUpdate(state, action){
      state.loading = false;
      state.error = false;
      state.dispatchUpdate = true;
      state.data = [...state.data];
      state.dataHelper = action.payload
    }
  },
});

export const { fetchStarted, 
  fetchSuccess,
  fetchError,
  deleteRepo, 
  filterByStars,
  filterByForks, 
  filterByOpenIssues, 
  filterByAge,
  filterByLastCommit,
  filterBySearch,
  dispatchUpdate } = slice.actions;

export const fetchRepo = (repository) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(
        `https://api.github.com/repos/${repository}`,
      {
        cache: 'no-store',
      },
    );
    const data = await response.json();
    console.log('repo',data)
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

// export const filterRepoStar = (listOriginal) => {
//   return(dispatch) => {
//     const newData = listOriginal?.sort((a,b) => b.stargazers_count - a.stargazers_count )
//     dispatch(dispatchUpadate(newData ))
//     console.log('listaFiltrada',newData )
//   }
// }
export const listRepositories = (state) => state.repo.data?.reduceRight(function(arr, last, index, coll){
  return (arr = arr.concat(last))
}, [])
// export const filterByStarSelector = (state) => state.repo.data?.sort((a,b) => b.stargazers_count - a.stargazers_count );
// export const filterByForksSelector = (state) => state.repo.data?.sort((a,b) => b.forks_count - a.forks_count);
export const dispatchUpdateSelector = (state) => state.repo.dispatchUpdate;
export const dataHelperSelector = (state) => state.repo.dataHelper
export default slice.reducer;