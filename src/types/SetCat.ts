import { ICat } from './PageCats'

// типы данных для initialState
export interface ISetCatState {
	cat: ICat
	loading: boolean
	error: string | null
}
// Перечисление экшенов
export enum SetCatActionsType {
	SET_CAT = 'SET_CAT',
	SET_CAT_SUCCESS = 'SET_CAT_SUCCESS',
	SET_CAT_ERROR = 'SET_CAT_ERROR',
}

// Типы экшенов
interface IFetchSetCatAction {
	type: SetCatActionsType.SET_CAT
}

interface IFetchSetCatSuccessAction {
	type: SetCatActionsType.SET_CAT_SUCCESS
	payload: {}
}

interface IFetchSetCatErrorAction {
	type: SetCatActionsType.SET_CAT_ERROR
	payload: string
}

export type SetCatAction =
	| IFetchSetCatAction
	| IFetchSetCatSuccessAction
	| IFetchSetCatErrorAction
