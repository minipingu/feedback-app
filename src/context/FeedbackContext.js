import { createContext, useState } from 'react'
import FeedbackData from '../components/data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData)
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	//deleteFeedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	//add Feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = +new Date()
		//you cant just push newfeedback to set feedback, you need to copy the array then spread the old feedback
		setFeedback([newFeedback, ...feedback])
	}

	//set item to be updated
	const editFeedback = (item) => {
		let itemEdit = {
			item,
			edit: true,
		}
		setFeedbackEdit(itemEdit)
		console.log(feedback)
	}

	const handleEdit = (feedbackInput) => {
		//copy the feedback array first (why? because its react wkwk)
		const feedbackUpdate = [...feedback]
		//then find the index to update
		const index = feedback.findIndex(
			(item) => item.id === feedbackEdit.item.id
		)
		const indexedFeedback = feedbackUpdate[index]
		//update the text and rating
		indexedFeedback.text = feedbackInput.text
		indexedFeedback.rating = feedbackInput.rating
		//set it so it can be updated in User Interface
		setFeedback(feedbackUpdate)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
				feedbackEdit,
				handleEdit,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
