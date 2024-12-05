export interface MileQuizType {
  isCompleted: boolean;
  score: number;
  questions: QuizQuestionType[];
}

export interface QuizQuestionType {
  question: string;
  options: {
    [key: string]: string;
  };
  correctAnswer: string;
}

export interface GenerateQuizRequest {
  topic: string;
  numberOfQuestions: number;
}

export interface GenerateQuizResponse {
  questions: QuizQuestionType[];
}
