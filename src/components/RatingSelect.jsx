function RatingSelect({ rating, setRating }) {
	const handleChange = (input) => {
		setRating(+input.target.value) // + sign to convert to number
	}

	const arrayRating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return (
		<ul className='rating'>
			{arrayRating.map((number) => (
				<li key={number}>
					<input
						type='radio'
						id={`num${number}`}
						name='rating'
						value={number}
						onChange={handleChange}
						checked={rating === number}
					/>
					<label htmlFor={`num${number}`}>{number}</label>
				</li>
			))}
		</ul>
	)
}

export default RatingSelect
