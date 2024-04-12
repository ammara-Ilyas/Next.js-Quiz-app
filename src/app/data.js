let data = [
  {
    question: "1) What does the acronym DOM stand for in JavaScript?",
    answer: [
      " Document Object Model",
      " Data Object Model",
      " Document Order Model",
      " Dynamic Object Model",
    ],

    correct: "Document Object Model",
  },

  {
    question: "2) How do you comment a single line in JavaScript?",
    answer: [
      " <!-- Comment -->", // Invalid JavaScript syntax
      " /* Comment */",
      " // Comment//",
      "  -- Comment --", // Invalid JavaScript syntax
    ],
    correct: "// Comment//",
  },

  {
    question:
      "3) What is the purpose of the addEventListener method in JavaScript?",
    answer: [
      " To add a new element to the DOM",
      " To attach an event handler to an element",
      " To remove an element from the DOM",
      "To modify the style of an element",
    ],
    correct: "To attach an event handler to an element",
  },
  {
    question:
      "4) How can you check if a variable is an array in JavaScript?    ",
    answer: [
      " Using isArray(variable)",
      "variable.isArray()",
      "  variable.isArray()",
      " typeof variable === 'array'",
    ],
    correct: "typeof variable === 'array'",
  },
  {
    question: "5) What is React.js primarily used for?    ",
    answer: [
      "Backend development",
      " Frontend development",
      "  Mobile app development",
      " Database management",
    ],
    correct: "Frontend development",
  },
  {
    question: "6) What does JSX stand for in React.js?   ",
    answer: [
      "JavaScript XML",
      " JavaScript Extension",
      " JavaScript XHR",
      " JavaScript Syntax",
    ],
    correct: "Frontend development",
  },
  {
    question: "7) What is the virtual DOM in React.js?    ",
    answer: [
      "The browser's representation of the actual DOM",
      "  A lightweight version of the actual DOM",
      "  A concept used to optimize rendering performance",
      " A server-side representation of the DOM",
    ],
    correct: " A concept used to optimize rendering performance",
  },
  {
    question:
      "8)In React.js, which hook is used to perform side effects in function components?",
    answer: [
      " useState()", // Invalid JavaScript syntax
      " useEffect()",
      " useMemo()",
      "  useCallback()", // Invalid JavaScript syntax
    ],
    correct: "useEffect()",
  },
];

export default data;
