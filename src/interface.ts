export interface wordProp {
  word: string;
  meaning: string;
}

interface optionProp {
  index: string;
  text: string;
}

export interface mcqProp {
  question: string;
  options: optionProp[];
  answer: string;
  explanation: string;
}
