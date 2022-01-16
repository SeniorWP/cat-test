import React, { FC } from 'react'
import { ICat } from '../../../types/PageCats'

import CatItem from '../CatItem/CatItem'

import style from './CatsList.module.css'

interface CatsListProps {
	cats?: ICat[]
	error?: string | null
	loading?: boolean
}

const CatsList: FC<CatsListProps> = ({ cats, error, loading }) => {
	if (loading) {
		return <h1>'Идет загрузка...'</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}
	if (!loading && !cats?.length) {
		return <h1>Ничего не найдено</h1>
	}
	return (
		<div>
			{
				<div className={style.cat__list}>
					{cats?.map(cat => (
						<CatItem key={cat.id} cat={cat} />
					))}
				</div>
			}
		</div>
	)
}

export default CatsList
