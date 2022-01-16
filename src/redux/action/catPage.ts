import { Dispatch } from 'redux'
import axios from 'axios'
import { CatsAction, CatsActionsType } from '../../types/PageCats'

import { FromTotalToPages } from '../../utils/FromTotalToPages'
import { PagesCount } from './PagesCount'

export const fetchPageCats = (page = 1, name = '') => {
	return async (dispatch: Dispatch<CatsAction>) => {
		try {
			dispatch({ type: CatsActionsType.FETCH_CATS })
			const response = await axios.get(`https://cats-api.strsqr.cloud/cats`, {
				params: { p: page, q: name },
			})
			dispatch({
				type: CatsActionsType.FETCH_CATS_SUCCESS,
				payload: response.data,
			})

			dispatch(
				PagesCount(FromTotalToPages(Number(response.headers['cats-count'])))
			)
			console.log(response.headers)
		} catch (e) {
			dispatch({
				type: CatsActionsType.FETCH_CATS_ERROR,
				payload: 'Произошла ошибка при загрузке страницы',
			})
		}
	}
}

export function setPageCats(page: number): CatsAction {
	return { type: CatsActionsType.SET_CATS_PAGE, payload: page }
}
export function searchPageCats(search: string): CatsAction {
	return { type: CatsActionsType.SEARCH_CATS_PAGE, payload: search }
}
