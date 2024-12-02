import { useParams } from "react-router-dom";

const Goal = () => {
  const goalId = useParams<{ id: string }>;
  return (
    <>
      <p>Goal</p>
    </>
  );
};

export default Goal;
