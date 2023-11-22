import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
function FeedbackForm() {
	const [text, setText] = useState('')
	const handleTextChange = (input) => {
		setText(input.target.value)
		console.log(input.target.value)
	}
	return (
		<Card>
			<form>
				<h2>How would you rate your service with us</h2>
				{/* @todo - rating select component */}
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a review'
						onChange={handleTextChange}
						value={text}
					/>
					<Button type='submit'>Send</Button>
				</div>
			</form>
		</Card>
	)
}

export default FeedbackForm
