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
		console.log(newFeedback)
		//you cant just push newfeedback to set feedback, you need to copy the array then spread the old feedback
		setFeedback([newFeedback, ...feedback])
	}

	//set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
				feedbackEdit,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
