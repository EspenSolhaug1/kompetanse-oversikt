export interface MileQuizType {
  id: number;
  status: boolean;
  score: number;
  questions: QuizQuestionType[];
}

export interface QuizQuestionType {
  question: string;
  options: {
    [key: number]: string;
  };
  answer: number;
}

export interface GenerateQuizRequest {
  topic: string;
  numberOfQuestions: string;
}

export interface GenerateQuizResponse {
  questions: QuizQuestionType[];
}
