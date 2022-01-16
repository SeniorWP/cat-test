import { CatsAction, CatsActionsType } from '../../types/PageCats'

export const PagesCount = (totalCount: number[]): CatsAction => {
	return {
		type: CatsActionsType.SET_PAGES_COUNT,
		payload: totalCount,
	}
}
