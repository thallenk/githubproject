import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'repo',
  initialState: {
    loading: false,
    data: [],
    dataHelper: null,
    error: null,
    dispatchUpdate: false,
    started: false,
    Ids:[]
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
      state.dispatchUpdate = false;
      state.started = true
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.data?.push(action.payload);
      state.dispatchUpdate = false;
      state.started = true
     
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = [...state.data];
      state.error = action.payload;
      state.dispatchUpdate = false;
      state.started = true
    },
    deleteRepo(state, action) {
        state.loading = false;
        state.data.splice(state.data.indexOf(action.payload),1);
        state.error = false;
        state.dispatchUpdate = false;
        state.started = false
    },
    filterByStars(state, action) {
      state.Ids?.push(action.payload)
      state.loading = false;
      state.error = false;
      state.dispatchUpdate = false;
      state.started = false
    },
    deleteIdStared(state, action){
      state.Ids?.splice(state.data.indexOf(action.payload),1);
      state.loading = false;
      state.error = false;
      state.dispatchUpdate = false;
      state.started = false
    },
    dispatchUpdate(state, action){
      state.loading = false;
      state.error = false;
      state.dispatchUpdate = true;
      state.data = [...state.data];
      state.dataHelper = action.payload
      state.started = true
    }
  },
});

export const { fetchStarted, 
  fetchSuccess,
  fetchError,
  deleteRepo, 
  filterByStars,
  dispatchUpdate,
  deleteIdStared } = slice.actions;

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



// Selectors
  // Data Original Selector
export const listRepositories = (state) => state.repo.data?.reduceRight(function(arr, last, index, coll){
  return (arr = arr.concat(last))
}, [])

//Update toggle selector
export const dispatchUpdateSelector = (state) => state.repo.dispatchUpdate;

// data update selector
export const dataHelperSelector = (state) => state.repo.dataHelper;

// ids stared selector
export const idsSelector = (state) => state.repo.Ids

//reducer
export default slice.reducer;