import axios from "axios";
import type { mcqProp } from "../interface";

export const generateMCQ = async (
  grade: number,
  topic: string
): Promise<mcqProp> => {
  try {
    const response = await axios.post("http://127.0.0.1:8080/generate_mcq", {
      grade,
      topic,
    });
    console.log(response);
    if (response.data.message !== "Success")
      return {
        question: "",
        options: [],
        answer: "",
        explanation: "",
      };
    const content = response.data.choices[0].message.content;
    const resArr = content.split("\n");
    const options = resArr.slice(1, 5).map((option: string) => {
      const parts = option.split(".");
      return {
        index: parts[0],
        text: parts[1],
      };
    });
    return {
      question: resArr[0],
      options,
      answer: resArr[5],
      explanation: resArr[6],
    };
  } catch (error) {
    console.error("Error generating MCQ:", error);
    throw error;
  }
};
