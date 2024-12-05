import { QuizOptionType } from "../../../types/MileQuizType";

const OptionListComponent = (props: { options: QuizOptionType }) => {
  return (
    <div className="optionBox">
      {Object.entries(props.options).map(([key, value]) => (
        <div key={key}>
          <strong>{key}</strong>: {value}
        </div>
      ))}
    </div>
  );
};
export default OptionListComponent;
