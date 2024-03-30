import css from "./feedback.module.css"
const Feedback = ({options, totalFeedback, positiveFeedback}) =>{
    return(
        <div className={css.feedbackBox}>
            <ul>
                <li>Good: {options.good}</li>
                <li>Neutral: {options.neutral}</li>
                <li>Bad: {options.bad}</li>
                <li className={css.total}>Total: {totalFeedback}</li>
                <li className={css.positive}>Positive: {positiveFeedback}%</li>
            </ul>
        </div>
    );
}
export default Feedback;