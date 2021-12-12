import React from 'react'
import styles from './_question.module.scss';
import questionMark1 from '../../../assets/images/question-1.svg';
import questionMark2 from '../../../assets/images/question-2.svg';

const Question = ({ question, answer, index, handleClick, isOpened }) => {
    let openedClass = (isOpened) ? "opened" : "";
    return (
        <li className={`${styles.questionWrapper} ${styles[openedClass]}`} onClick={() => handleClick(index)}>
            <div className={styles.question}>
                <div className={styles.questionMark}>
                    <img src={(index % 2) ? questionMark1 : questionMark2} alt="questionmark image" />
                </div>
                <div class={styles.content}>{question}</div>
            </div>
            <div className={styles.answer}>
                {answer}
            </div>
        </li>
    )
}

export default Question
