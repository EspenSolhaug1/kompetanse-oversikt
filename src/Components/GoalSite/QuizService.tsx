import axios from "axios";
import { GenerateQuizRequest, QuizQuestionType } from "../../types/QuizType";

const API_URL = "https://localhost:7293/api/Quiz";

export const generateQuiz = async (
  data: GenerateQuizRequest
): Promise<QuizQuestionType[]> => {
  try {
    //SENDE TIL DATABASEN? Fix prompt i backend! ? ? ? ?
    //? ? ? ? ?
    //????
    const response = await axios.post(`${API_URL}/generate`, data);

    // Extract the quiz content
    const quizRawContent = response.data.choices[0].message.content;

    // Parse the JSON string into an object
    const quizQuestions: QuizQuestionType[] = JSON.parse(quizRawContent);

    sendToDB(quizQuestions);
    return quizQuestions;
  } catch (error: any) {
    console.error(
      "Error generating quiz:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const sendToDB = (quiz: QuizQuestionType[]) => {
  // Post quiz to db
};
