import * as PageCatsActionCreators from './catPage'
import * as SetCatActionCreators from './setCat'
import * as PagesCountActionCreators from './PagesCount'

export default {
	...PageCatsActionCreators,
	...SetCatActionCreators,
	...PagesCountActionCreators,
}
