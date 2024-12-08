import axios from "axios";
import { GenerateQuizRequest, QuizQuestionType } from "../../types/QuizType";

const API_URL = "https://localhost:7293/api/Quiz";

export const generateQuiz = async (
  data: GenerateQuizRequest
): Promise<QuizQuestionType[]> => {
  try {
    console.log(data);
    const response = await axios.post(`${API_URL}/generate`, data);

    // Extract the quiz content
    const quizRawContent = response.data.choices[0].message.content;

    // Parse the JSON string into an object
    const quizQuestions: QuizQuestionType[] = JSON.parse(quizRawContent);
    return quizQuestions;
  } catch (error: any) {
    console.error(
      "Error generating quiz:",
      error.response?.data || error.message
    );
    throw error;
  }
};
