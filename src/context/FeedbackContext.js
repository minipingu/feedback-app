import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'This item is from context',
			rating: 10,
		},
	])

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = +new Date()
		console.log(newFeedback)
		//you cant just push newfeedback to set feedback, you need to copy the array then spread the old feedback
		setFeedback([newFeedback, ...feedback])
	}

	return (
		<FeedbackContext.Provider
			value={{ feedback, deleteFeedback, addFeedback }}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
