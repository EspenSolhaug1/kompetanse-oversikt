export interface MileQuizType {
  isCompleted: boolean;
  score: number;
  questions: MileQuizQuestionType[];
}

export interface MileQuizQuestionType {
  question: string;
  options: QuizOptionType;
  correctAnswer: string;
}

export interface QuizOptionType {
  [key: string]: string;
}
