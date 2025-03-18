import axios from "axios";
import type { mcqProp } from "../interface";

export const generateMCQ = async (grade: number, topic: string): Promise<mcqProp> => {
  try {
    const response = await axios.post("http://127.0.0.1:8080/generate_mcq", { grade, topic });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error generating MCQ:", error);
    throw error;
  }
};
