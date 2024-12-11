import { UserLoginType } from "../types/UserLoginType";

export const MockLoginData: UserLoginType[] = [
  {
    id: 1,
    userId: 1,
    email: "ateeb@gmail.com",
    password: "passord123",
  },
  {
    id: 3,
    userId: 3,
    email: "kari.nordmann@email.com",
    password: "1234567890",
  },
];
/*
export const MockProfileData: UserType[] = [
  {
    id: 1,
    name: "Ola Nordmann",
    jobTitle: "Fullstack engineer",
    goals: [
      {
        id: 1,
        name: "Learn Csharp",
        difficulty: 2,
        quiz: { score: 0, status: false, questions: [] },
        milestones: [
          {
            id: 1,
            title: "Basics",
            description: "Intro to Csharp",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 2,
            title: "Syntax",
            description: "Syntax for Csharp",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 3,
            title: "Map hashMap to maps for mapping maps",
            description: "Treasure maps that maps hashmaps",
            status: true,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
        ],
      },
      {
        id: 2,
        name: "Practice use of cloud",
        difficulty: 1,
        quiz: { score: 0, questions: [] },
        milestones: [
          {
            id: 4,
            title: "Basics",
            description: "Intro to AWS",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 5,
            title: "Syntax",
            description: "Intro to Azure",
            status: true,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 6,
            title: "Practical use of containers",
            description:
              "Deploy treasure maps in maps in clouds in the sky on a rainy day in Sweden",
            status: true,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
        ],
      },
      {
        id: 7,
        name: "Explore AI",
        difficulty: 3,
        quiz: { score: 0, questions: [] },
        milestones: [
          {
            id: 19,
            title: "Learn Machine Learning Basics",
            description: "Understand ML algorithms and their applications",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 20,
            title: "Build a Neural Network",
            description: "Create a simple NN using TensorFlow or PyTorch",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
        ],
      },
      {
        id: 8,
        name: "Optimize Code Performance",
        difficulty: 2,
        quiz: { score: 0, questions: [] },
        milestones: [
          {
            id: 21,
            title: "Profile Application",
            description: "Use tools to identify performance bottlenecks",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 22,
            title: "Refactor Critical Sections",
            description: "Improve performance-critical parts of the code",
            status: true,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
        ],
      },
    ],
    skills: [
      "Java",
      "Python",
      "Csharp",
      "CPlusPlus",
      "Azure",
      "AWS",
      "File Management",
    ],
    totalPoints: 21.69,
  },
  {
    id: 2,
    name: "Kari Nordmann",
    jobTitle: "Software Developer",
    goals: [
      {
        id: 3,
        name: "Master React",
        difficulty: 3,
        quiz: { score: 0, questions: [] },
        milestones: [
          {
            id: 7,
            title: "React Basics",
            description: "Learn about components, props, and state",
            status: false,
            quiz: {
              score: 0,
              questions: [],
            },
          },
          {
            id: 8,
            title: "Advanced Hooks",
            description: "Understand useReducer, useCallback, and useMemo",
            status: true,
            quiz: {
              score: 0,
              questions: [],
            },
          },
          {
            id: 9,
            title: "React Testing",
            description: "Write tests for React components using Jest",
            status: true,
            quiz: {
              score: 0,
              questions: [],
            },
          },
        ],
      },
      {
        id: 4,
        name: "Contribute to Open Source",
        difficulty: 2,
        quiz: { score: 0, questions: [] },
        milestones: [
          {
            id: 10,
            title: "Find a Project",
            description: "Search GitHub for beginner-friendly projects",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 11,
            title: "Submit a PR",
            description: "Fix a bug or add a feature and submit a pull request",
            status: true,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 12,
            title: "Join Community Discussions",
            description: "Participate in open-source discussions and forums",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
        ],
      },
      {
        id: 9,
        name: "Learn Node.js",
        difficulty: 2,
        quiz: { score: 0, questions: [] },
        milestones: [
          {
            id: 23,
            title: "Learn Basics",
            description: "Understand the fundamentals of Node.js",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 24,
            title: "Build REST APIs",
            description: "Create and deploy a RESTful API",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
        ],
      },
      {
        id: 10,
        name: "Enhance Accessibility Skills",
        difficulty: 1,
        quiz: { score: 0, questions: [] },
        milestones: [
          {
            id: 25,
            title: "Understand WCAG Guidelines",
            description: "Learn about Web Content Accessibility Guidelines",
            status: true,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
          {
            id: 26,
            title: "Implement ARIA Attributes",
            description: "Add ARIA roles and attributes to a project",
            status: false,
            quiz: {
              score: 0,
              questions: [
                {
                  question:
                    "Which component of .NET is responsible for managing the execution of .NET programs?",
                  options: {
                    A: ".NET Runtime",
                    B: "Common Language Runtime (CLR)",
                    C: "Framework Class Library (FCL)",
                    D: "ASP.NET",
                  },
                  correctAnswer: "B",
                },
                {
                  question:
                    "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
                  options: {
                    A: "To store application-specific configuration files",
                    B: "To enable debugging of .NET applications",
                    C: "To store assemblies for shared use by multiple applications",
                    D: "To manage memory allocation for .NET applications",
                  },
                  correctAnswer: "C",
                },
                {
                  question:
                    "Which programming language is NOT supported by the .NET framework?",
                  options: { A: "C#", B: "VB.NET", C: "Java", D: "F#" },
                  correctAnswer: "C",
                },
              ],
            },
          },
        ],
      },
    ],
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Angular",
      "Jest",
      "GitHub",
      "JavaScript",
      "React",
      "HTML",
      "Angular",
      "CSS",
      "Jest",
      "GitHub",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Jest",
      "GitHub",
    ],
    totalPoints: 15.45,
  },
  
];

//export default { MockProfileData, MockLoginData };
*/
