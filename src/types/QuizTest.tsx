export interface QuizQuestion {
    question: string;
    options: {
      A: string;
      B: string;
      C: string;
      D: string;
    };
    correctAnswer: string;
  }
  
  export interface GenerateQuizRequest {
    topic: string;
    numberOfQuestions: number;
  }
  
  export interface GenerateQuizResponse {
    questions: QuizQuestion[];
  }
  