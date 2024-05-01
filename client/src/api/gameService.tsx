import axios from "axios";

export const getQuestions = async (difficulty: string) => {
  const response = await axios.get(
    "https://the-trivia-api.com/api/questions",
    {
      params: {
        limit: 5,
        difficulty: difficulty,
    }
  }
  );
  const data = response.data;
  return data;
}