import { CatsAction, ICatsState, CatsActionsType } from '../../types/PageCats'

const initialState: ICatsState = {
	cats: [],
	page: 1,
	error: null,
	loading: false,
	search: '',
	pages: [],
}

export const CatsReducer = (
	state = initialState,
	action: CatsAction
): ICatsState => {
	switch (action.type) {
		case CatsActionsType.FETCH_CATS:
			return { ...state, loading: true }
		case CatsActionsType.FETCH_CATS_SUCCESS:
			return { ...state, loading: false, cats: action.payload }
		case CatsActionsType.FETCH_CATS_ERROR:
			return { ...state, loading: false, error: action.payload }
		case CatsActionsType.SET_CATS_PAGE:
			return { ...state, page: action.payload }
		case CatsActionsType.SEARCH_CATS_PAGE:
			return { ...state, search: action.payload }
		case CatsActionsType.SET_PAGES_COUNT:
			return { ...state, pages: action.payload }

		default:
			return state
	}
}
