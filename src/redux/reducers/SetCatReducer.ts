import {
	ISetCatState,
	SetCatAction,
	SetCatActionsType,
} from '../../types/SetCat'

import { ICat } from '../../types/PageCats'

const initialState: ISetCatState = {
	cat: {} as ICat,
	loading: false,
	error: null,
}

export const SetCatReducer = (
	state = initialState,
	action: SetCatAction
): ISetCatState => {
	switch (action.type) {
		case SetCatActionsType.SET_CAT:
			return { ...state, loading: true }
		case SetCatActionsType.SET_CAT_SUCCESS:
			return { ...state, loading: false, cat: action.payload as ICat }
		case SetCatActionsType.SET_CAT_ERROR:
			return { ...state, loading: false, error: action.payload }

		default:
			return state
	}
}
