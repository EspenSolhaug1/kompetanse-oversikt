import { QuestionType } from "./QuestionType";

export interface QuizType {
  id: number;
  theme: string;
  score: number;
  questions: QuestionType[];
}
