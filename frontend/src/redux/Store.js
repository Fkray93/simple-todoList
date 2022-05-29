import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import TodoReducer from './Todo'


export default configureStore({
    reducer : {
        todo : TodoReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})