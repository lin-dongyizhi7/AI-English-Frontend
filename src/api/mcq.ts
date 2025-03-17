import axios from "axios";

export const generateMCQ = async (grade: number, topic: string) => {
  try {
    const response = await axios.post("http://127.0.0.1:8080/generate_mcq", { grade, topic });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error generating MCQ:", error);
    throw error;
  }
};
