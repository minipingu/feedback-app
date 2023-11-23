import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
function FeedbackForm() {
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const handleTextChange = (input) => {
		const inputValue = input.target.value

		setText(inputValue)

		if (inputValue === '') {
			setMessage(null)
			setBtnDisabled(true)
		}
		if (inputValue !== '' && inputValue.trim().length < 10) {
			setMessage('Text must be at least 10 characters long')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}
		console.log(inputValue, inputValue.length)
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
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
