import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/description/description'
import Feedback from './components/feedback/feedback'
import Options from './components/options/options'
import Notification from './components/notifications/notification'


const optionsInitial = { good: 0, neutral: 0, bad: 0 };
function App() {

  const [options, setOptions] = useState(()=>{
    const stringifiedOptions = localStorage.getItem("optionsValue")
    const parsedOptions = JSON.parse(stringifiedOptions) ?? optionsInitial;
    return parsedOptions;
  })

  useEffect(() => {
    localStorage.setItem("optionsValue", JSON.stringify(options))
  }, [options])

  const updateFeedback = (feedbackType) =>{
    setOptions({...options, [feedbackType]: options[feedbackType] + 1})
  }

  
  const totalFeedback = options.good + options.neutral + options.bad;
  
  const positiveFeedback = Math.round((options.good / totalFeedback) * 100)
  
  const hasFeedback = options.good > 0 || options.neutral > 0 || options.bad > 0;

  const resetFeedback = () => {
    setOptions({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description/>
      <Options updateFeedback = {updateFeedback}
              resetFeedback = {resetFeedback}
              hasFeedback = {hasFeedback}
      />

      { hasFeedback ?
      (<Feedback options={options}
                 totalFeedback = {totalFeedback}
                 positiveFeedback = {positiveFeedback}
      /> ) : 
      (<Notification/>)}
    </>
  )
}

export default App
