import { QuizOptionType } from "./QuizOptionType";

export interface MileQuizType {
  question: string;
  options: QuizOptionType[];
  correctAnswer: string;
}
