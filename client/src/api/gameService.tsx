import axios from "axios";

const baseUrl = "/api/game";


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

export const getLeaderboard = async () => {
  const response = await axios.get(baseUrl + "/Highest/10");
  const data = response.data;
  return data;
}