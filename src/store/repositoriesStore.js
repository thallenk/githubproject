import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'repo',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.data.push(action.payload);
     
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = [...state.data]
      state.error = action.payload;
    },
    deleteRepo(state, action) {
        state.loading = false;
        state.data.splice(state.data.indexOf(action.payload),1);
        state.error = false;
    },
    filterByStars(state) {
      state.loading = false;
      state.data.sort((a,b) => a.stargazers_count - b.stargazers_count );
      state.error = false;
    }
  },
});

export const { fetchStarted, fetchSuccess, fetchError, deleteRepo, filterByStars } = slice.actions;
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

export const listRepositories = (state) => state.repo.data
export default slice.reducer;