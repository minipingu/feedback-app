import { useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {
	const { addFeedback, feedbackEdit, handleEdit } = useContext(FeedbackContext)
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')
	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false)
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
		}
	}, [feedbackEdit])

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
	}

	const handleSubmit = (submit) => {
		submit.preventDefault()
		if (text.trim().length > 10) {
			const feedbackInput = {
				text,
				rating,
			}
			if (feedbackEdit.edit) {
				handleEdit(feedbackInput)
			} else {
				addFeedback(feedbackInput)
			}
			setText('')
			setRating(10)
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us</h2>
				<RatingSelect rating={rating} setRating={setRating} />
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
