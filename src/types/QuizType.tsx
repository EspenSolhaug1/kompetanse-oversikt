export interface MileQuizType {
  id: number;
  status: boolean;
  score: number;
  questions: QuizQuestionType[];
}

export interface QuizQuestionType {
  content: string;
  options: string[];
  answer: number;
}

export interface GenerateQuizRequest {
  topic: string;
  numberOfQuestions: string;
  id: number;
}

export interface GenerateQuizResponse {
  questions: QuizQuestionType[];
}

