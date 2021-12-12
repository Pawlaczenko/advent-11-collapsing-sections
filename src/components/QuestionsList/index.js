import React, { useState } from 'react'
import Question from './Question';

import styles from './_questionsList.module.scss';
import questions from '../../content/questions';

const QuestionsList = () => {
    const [openedQuestion, setOpenedQuestion] = useState(null);

    const handleClick = (index) => {
        if (index === openedQuestion) setOpenedQuestion(null);
        else setOpenedQuestion(index);
    }

    return (
        <ul className={styles.wrapper}>
            {
                questions.map((el, index) => <Question question={el.question} answer={el.answer} index={index} handleClick={handleClick} isOpened={index === openedQuestion} key={index} />)
            }
        </ul>
    )
}

export default QuestionsList
