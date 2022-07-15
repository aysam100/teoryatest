import React, {useEffect, useState} from "react";

import Header from "./Header";
import AnswerCard from "./AnswerCard";
import Status from "./Status";
import EndQuiz from "./EndQuiz";


function Quiz(props) {
    const {
        selectedCategory,
        selectedQuestions,
      } = props;
    const [questionNumber, setQuestionNumber] = useState(0)
    const [numCorrect, setNumCorrect] = useState(0)
    const [statusShown, setStatusShown] = useState(0)
    const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(0)

    const handleClick = (answer) => {
        setStatusShown(true)
        answer ? setStatus("correct")
            : setStatus("wrong");
    }

    const setStatus = (status) => {
        if (status === "correct") {
            setNumCorrect(numCorrect + 1)
            setCurrentQuestionCorrect(true)
        } else {
            setCurrentQuestionCorrect(false)
        }

        setTimeout(() => switchQuestion(), 750);
    }

    const switchQuestion = () => {
        setStatusShown(false)
        setQuestionNumber(questionNumber < 2 ? questionNumber + 1 : false)
    }
    return (questionNumber !== false ?
        <div>
            <Header>{selectedQuestions[questionNumber].question}</Header>
            {selectedQuestions[questionNumber].img ? <img src={`/questionImages/${selectedQuestions[questionNumber].img}`} /> : null}
            <div className="flex justify-center mt-16">
                <AnswerCard
                    answers={selectedQuestions[questionNumber].options}
                    onClick={handleClick}
                />
            </div>
            {/* {statusShown && (
                <Status correct={currentQuestionCorrect} />
            )} */}
        </div>
        : <EndQuiz numCorrect={numCorrect} />
    )
}

export default Quiz;
