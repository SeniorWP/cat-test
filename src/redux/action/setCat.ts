import axios from 'axios'

import { Dispatch } from 'redux'
import { SetCatAction, SetCatActionsType } from '../../types/SetCat'

export const fetchCat = (slug = '') => {
	return async (dispatch: Dispatch<SetCatAction>) => {
		try {
			dispatch({ type: SetCatActionsType.SET_CAT })
			const response = await axios.get(
				`https://cats-api.strsqr.cloud/cats/${slug}`
			)
			dispatch({
				type: SetCatActionsType.SET_CAT_SUCCESS,
				payload: response.data,
			})
		} catch (e) {
			dispatch({
				type: SetCatActionsType.SET_CAT_ERROR,
				payload: 'Произошла ошибка при загрузке КОНКРЕТНОГО КОТА',
			})
		}
	}
}
