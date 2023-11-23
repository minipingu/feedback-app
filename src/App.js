import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'
function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	const handleAdd = (newFeedback) => {
		newFeedback.id = parseInt(uuidv4())
		console.log(newFeedback)
		//you cant just push newfeedback to set feedback, you need to copy the array then spread the old feedback
		setFeedback([newFeedback, ...feedback])
	}
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm handleAdd={handleAdd} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	)
}

export default App
