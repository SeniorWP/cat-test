import { combineReducers } from 'redux'
import { CatsReducer } from './PageCatsReducer'
import { SetCatReducer } from './SetCatReducer'

export const rootReducer = combineReducers({
	catsPage: CatsReducer,
	SetCat: SetCatReducer,
})

export type RootState = ReturnType<typeof rootReducer>
