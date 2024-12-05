import { QuizQuestionType } from "../../../types/QuizType";
import OptionListComponent from "./OptionListComponent";

const QuestionListComponent = (props: { questions: QuizQuestionType[] }) => {
  return (
    <div>
      {props.questions.map((q) => (
        <div className="question-box">
          <h3>{q.question}</h3>
          <OptionListComponent options={q.options} />
        </div>
      ))}
    </div>
  );
};

export default QuestionListComponent;
