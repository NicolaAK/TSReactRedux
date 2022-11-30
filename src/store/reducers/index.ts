import { todoReducer } from './todoReducer';
import { userReduser } from './userReduser';
import {combineReducers} from "redux"

export const rootReducer = combineReducers ({
    user: userReduser,
    todos: todoReducer
    })

export type RootState = ReturnType<typeof rootReducer>