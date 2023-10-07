import toDoSlice from "./toDoSlice";
import {configureStore, combineReducers, Action, ThunkAction} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    [toDoSlice.name]: toDoSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>