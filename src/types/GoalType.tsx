import { MilestoneType } from "./MilestoneType";
import { MileQuizType } from "./QuizType";

export interface GoalType {
  id: number;
  name: string;
  difficulty: number;
  profileId: number;
  milestoneList: MilestoneType[];
  quizList: MileQuizType[];
}
