import axios from "axios";
import { GenerateQuizRequest, QuizQuestion } from "./QuizType";

const API_URL = "https://localhost:7293/api/Quiz";

export const generateQuiz = async (
  data: GenerateQuizRequest
): Promise<QuizQuestion[]> => {
  try {
    const response = await axios.post(`${API_URL}/generate`, data);

    // Extract the quiz content
    const quizRawContent = response.data.choices[0].message.content;

    // Parse the JSON string into an object
    const quizQuestions: QuizQuestion[] = JSON.parse(quizRawContent);

    return quizQuestions;
  } catch (error: any) {
    console.error(
      "Error generating quiz:",
      error.response?.data || error.message
    );
    throw error;
  }
};
