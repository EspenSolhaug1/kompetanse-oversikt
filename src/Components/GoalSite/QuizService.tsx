import axios from "axios";
import { GenerateQuizRequest, QuizQuestionType } from "../../types/QuizType";

const API_URL = "https://localhost:7293/api";

export const generateQuiz = async (
  data: GenerateQuizRequest
): Promise<QuizQuestionType[]> => {
  try {
    //IF already exists, dont
    const response = await axios.post(`${API_URL}/Quiz/generate`, data);

    // Extract the quiz content
    const quizRawContent = response.data.choices[0].message.content;

    // Parse the JSON string into an object
    const quizQuestions: QuizQuestionType[] = JSON.parse(quizRawContent);

    sendToDB(quizQuestions, data.id);
    return quizQuestions;
  } catch (error: any) {
    console.error(
      "Error generating quiz:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const sendToDB = async (quiz: QuizQuestionType[], id: number) => {
  // Post quiz to db
  let response;
  const paraToAxios = {
    score: 0,
    status: false,
    questions: quiz,
  };
  try {
    response = await axios.post(
      `${API_URL}/quizq/milestone/${id}`,
      paraToAxios
    );
  } catch (error: any) {
    console.error(error.message);
  }
};
