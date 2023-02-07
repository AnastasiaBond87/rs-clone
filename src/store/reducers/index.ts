import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeState } from './themeSlice';
import { langState } from './langSlice';

const combinedReducers = combineReducers({ theme: themeState, language: langState });

const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
