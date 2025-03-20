import axios from "axios";
import type { mcqProp } from "../interface";

export const generateMCQ = async (grade: number, topic: string): Promise<mcqProp> => {
  try {
    const response = await axios.post("http://127.0.0.1:8080/generate_mcq", { grade, topic });
    console.log(response);
    if (response.data.message!=='Success') return {
      question: '',
      options: [],
      answer: '',
      explanation: ''
    };
    const content = response.data.choices[0].message.content;

    return response.data;
  } catch (error) {
    console.error("Error generating MCQ:", error);
    throw error;
  }
};
