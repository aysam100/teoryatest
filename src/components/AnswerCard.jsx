function AnswerCard(props) {
    return (
        <div className="question-card">
          {/* List of possible answers  */}
          <ul>
            {props.answers.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => props.onClick(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
    );
}

export default AnswerCard;