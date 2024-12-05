import { MileQuizQuestionType } from "../../../types/MileQuizType";
import OptionListComponent from "./OptionListComponent";

const QuestionListComponent = (props: {
  questions: MileQuizQuestionType[];
}) => {
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
