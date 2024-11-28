import { QuestionType } from "./QuestionType";

export interface Quiz {
  id: number;
  theme: string;
  score: number;
  questions: QuestionType[];
}
