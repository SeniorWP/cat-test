import React, { FC, useEffect, useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import CatsList from '../CatsList/CatsList'

import style from './Home.module.css'

const Home: FC = () => {
	const [localSearch, setLocalSearch] = useState('')
	const { page, error, loading, cats, search, pages } = useTypedSelector(
		state => state.catsPage
	)

	const { fetchPageCats, setPageCats, searchPageCats, PagesCount } =
		useActions()

	useEffect(() => {
		fetchPageCats(page, search)
	}, [page, search])

	useEffect(() => {
		if (localSearch === '') {
			searchPageCats('')
		}
	}, [localSearch])

	useEffect(() => {}, [pages])

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLocalSearch(e.target.value)
	}

	const submitHandler = () => {
		searchPageCats(localSearch)
	}

	const resetHandler = () => {
		searchPageCats('')
		setLocalSearch('')
	}

	return (
		<div className={style.home__content}>
			<div>
				<div className={style.form}>
					<input
						className={style.input}
						value={localSearch}
						onChange={inputHandler}
						type='search'
						placeholder='Поиск друга...'
						autoFocus
					/>
					<button className={style.button} onClick={submitHandler}>
						Поиск
					</button>
					<button className={style.button} onClick={resetHandler}>
						Сбросить
					</button>
				</div>

				<CatsList cats={cats} error={error} loading={loading} />
				<div style={{ display: 'flex', paddingBottom: 40 }}>
					{pages?.map(p => (
						<div onClick={() => setPageCats(p)} className={style.pageCount}>
							{p}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
