import { userReduser } from './userReduser';
import {combineReducers} from "redux"

export const rootReducer = combineReducers ({
    user: userReduser,
    })

export type RootState = ReturnType<typeof rootReducer>