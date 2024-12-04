import { MileQuizType } from "./MileQuizType";

export interface MilestoneType {
  id: number;
  title: string;
  description: string;
  status: boolean;
  quiz: MileQuizType
}
