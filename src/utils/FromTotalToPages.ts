const PAGINATION_STEP = 10

export const FromTotalToPages = (total: number) => {
	const res: number[] = []
	let tempCount = total
	let i = 1
	while (tempCount > 0) {
		tempCount = tempCount - PAGINATION_STEP
		res.push(i)
		i++
	}
	return res
}
