import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICat } from '../../../types/PageCats'

import style from './CatItem.module.css'

interface CatItemProps {
	cat: ICat
}

const CatItem: FC<CatItemProps> = ({ cat }) => {
	return (
		<div className={style.cat__item}>
			<div>
				<Link className={style.cat__item_link} key={cat.id} to={`/${cat.slug}`}>
					<img className={style.cat__img} src={cat.image_url} alt={cat.name} />

					<div className={style.cat__item_name}>{cat.name}</div>
				</Link>
			</div>
		</div>
	)
}

export default CatItem
