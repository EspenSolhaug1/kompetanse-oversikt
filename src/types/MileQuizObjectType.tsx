import { MileQuizType } from "./MileQuizType";

export interface MileQuizObjectType {
    id: number;
    milestoneId: number;
    quiz: MileQuizType[];
  }