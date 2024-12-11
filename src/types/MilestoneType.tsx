import { MileQuizType } from "./QuizType";

export interface MilestoneType {
  id: number;
  title: string;
  description: string;
  status: boolean;
  quizList: MileQuizType[];
}
