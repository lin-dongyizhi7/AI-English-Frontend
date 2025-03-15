import axios from "axios";

export const generateMCQ = async (topic: string) => {
  try {
    const response = await axios.post("/generate_mcq", { topic });
    return response.data;
  } catch (error) {
    console.error("Error generating MCQ:", error);
    throw error;
  }
};
