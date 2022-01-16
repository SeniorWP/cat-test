export interface ICat {
	id: number
	name: string
	slug: string
	image_url: string
	description: string
}

export interface ICatsState {
	cats: ICat[]
	loading: boolean
	error?: null | string
	page: number
	search: string
	pages?: number[]
}

export enum CatsActionsType {
	FETCH_CATS = 'FETCH_CATS',
	FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS',
	FETCH_CATS_ERROR = 'FETCH_CATS_ERROR',
	SET_CATS_PAGE = 'SET_CATS_PAGE',
	SEARCH_CATS_PAGE = 'SEARCH_CATS_PAGE',
	SET_PAGES_COUNT = 'SET_PAGES_COUNT',
}

interface IFetchCatsAction {
	type: CatsActionsType.FETCH_CATS
}

interface IFetchCatsSuccessAction {
	type: CatsActionsType.FETCH_CATS_SUCCESS
	payload: any[]
}

interface IFetchCatsErrorAction {
	type: CatsActionsType.FETCH_CATS_ERROR
	payload: string
}

interface ISetCatsAction {
	type: CatsActionsType.SET_CATS_PAGE
	payload: number
}

interface ISearchCatsAction {
	type: CatsActionsType.SEARCH_CATS_PAGE
	payload: string
}

interface ISetCountAction {
	type: CatsActionsType.SET_PAGES_COUNT
	payload: number[]
}

export type CatsAction =
	| IFetchCatsAction
	| IFetchCatsSuccessAction
	| IFetchCatsErrorAction
	| ISetCatsAction
	| ISearchCatsAction
	| ISetCountAction
