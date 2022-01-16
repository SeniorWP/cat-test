import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useParams } from 'react-router-dom'

import style from './CatPage.module.css'

const CatPage: FC = () => {
	const { slug } = useParams()

	const { cat, error, loading } = useTypedSelector(state => state.SetCat)

	const { fetchCat } = useActions()

	useEffect(() => {
		fetchCat(slug)
	}, [slug])

	if (loading) {
		return <h1>'Идет загрузка конкретного кота...'</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			<div className={style.cat__item_page}>
				<h1 className={style.cat__name_page}>{cat.name}</h1>
				<img className={style.cat__img} src={cat.image_url} alt='' />
			</div>
			<p>{cat.description}</p>
		</div>
	)
}

export default CatPage
