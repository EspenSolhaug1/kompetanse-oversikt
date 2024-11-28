import React from "react";

interface GoalItem {
  goal: {
    id: number;
    name: string;
    difficulty: number;
    milestones: milestone[];
  };
}
interface milestone {
  id: number;
  category: string;
  description: string;
  status: boolean;
}

const GoalItem: React.FC<GoalItem> = ({ goal }) => {
  return (
    <>
      <div className="goalTitle">
        <h1>{goal.name}</h1>
        <button>Ta big boii quiz</button>
      </div>
      <h2>Milepæler</h2>
    </>
  );
};

export default GoalItem;
