export interface MileQuizType {
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
  numberOfQuestions: string;
}

export interface GenerateQuizResponse {
  questions: QuizQuestionType[];
}
