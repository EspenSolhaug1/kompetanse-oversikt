import { UserLoginType } from "../types/UserLoginType";
import { MileQuizObjectType } from "../types/MileQuizObjectType";
import { UserType } from "../types/UserType";

export const MockMileQuizData: MileQuizObjectType[] = [
  {
    id: 1,
    milestoneId: 7,
    quiz: [
      {
        question:
          "Which component of .NET is responsible for managing the execution of .NET programs?",
        options: [
          { A: ".NET Runtime" },
          { B: "Common Language Runtime (CLR)" },
          { C: "Framework Class Library (FCL)" },
          { D: "ASP.NET" },
        ],
        correctAnswer: "B",
      },
      {
        question:
          "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
        options: [
          { A: "To store application-specific configuration files" },
          { B: "To enable debugging of .NET applications" },
          { C: "To store assemblies for shared use by multiple applications" },
          { D: "To manage memory allocation for .NET applications" },
        ],
        correctAnswer: "C",
      },
      {
        question:
          "Which programming language is NOT supported by the .NET framework?",
        options: [{ A: "C#" }, { B: "VB.NET" }, { C: "Java" }, { D: "F#" }],
        correctAnswer: "C",
      },
    ],
  },
];
export const MockLoginData: UserLoginType[] = [
  {
    id: 1,
    userId: 1,
    email: "ola.nordmann@email.com",
    password: "passord123",
  },
  {
    id: 2,
    userId: 2,
    email: "kari.nordmann@email.com",
    password: "1234567890",
  },
  {
    id: 3,
    userId: 3,
    email: "per.hansen@email.com",
    password: "0987654321",
  },
];

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
        milestones: [
          {
            id: 1,
            title: "Basics",
            description: "Intro to Csharp",
            status: false,
          },
          {
            id: 2,
            title: "Syntax",
            description: "Syntax for Csharp",
            status: false,
          },
          {
            id: 3,
            title: "Map hashMap to maps for mapping maps",
            description: "Treasure maps that maps hashmaps",
            status: true,
          },
        ],
      },
      {
        id: 2,
        name: "Practice use of cloud",
        difficulty: 1,
        milestones: [
          {
            id: 4,
            title: "Basics",
            description: "Intro to AWS",
            status: false,
          },
          {
            id: 5,
            title: "Syntax",
            description: "Intro to Azure",
            status: true,
          },
          {
            id: 6,
            title: "Practical use of containers",
            description:
              "Deploy treasure maps in maps in clouds in the sky on a rainy day in Sweden",
            status: true,
          },
        ],
      },
      {
        id: 7,
        name: "Explore AI",
        difficulty: 3,
        milestones: [
          {
            id: 19,
            title: "Learn Machine Learning Basics",
            description: "Understand ML algorithms and their applications",
            status: false,
          },
          {
            id: 20,
            title: "Build a Neural Network",
            description: "Create a simple NN using TensorFlow or PyTorch",
            status: false,
          },
        ],
      },
      {
        id: 8,
        name: "Optimize Code Performance",
        difficulty: 2,
        milestones: [
          {
            id: 21,
            title: "Profile Application",
            description: "Use tools to identify performance bottlenecks",
            status: false,
          },
          {
            id: 22,
            title: "Refactor Critical Sections",
            description: "Improve performance-critical parts of the code",
            status: true,
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
        milestones: [
          {
            id: 7,
            title: "React Basics",
            description: "Learn about components, props, and state",
            status: false,
          },
          {
            id: 8,
            title: "Advanced Hooks",
            description: "Understand useReducer, useCallback, and useMemo",
            status: true,
          },
          {
            id: 9,
            title: "React Testing",
            description: "Write tests for React components using Jest",
            status: true,
          },
        ],
      },
      {
        id: 4,
        name: "Contribute to Open Source",
        difficulty: 2,
        milestones: [
          {
            id: 10,
            title: "Find a Project",
            description: "Search GitHub for beginner-friendly projects",
            status: false,
          },
          {
            id: 11,
            title: "Submit a PR",
            description: "Fix a bug or add a feature and submit a pull request",
            status: true,
          },
          {
            id: 12,
            title: "Join Community Discussions",
            description: "Participate in open-source discussions and forums",
            status: false,
          },
        ],
      },
      {
        id: 9,
        name: "Learn Node.js",
        difficulty: 2,
        milestones: [
          {
            id: 23,
            title: "Learn Basics",
            description: "Understand the fundamentals of Node.js",
            status: false,
          },
          {
            id: 24,
            title: "Build REST APIs",
            description: "Create and deploy a RESTful API",
            status: false,
          },
        ],
      },
      {
        id: 10,
        name: "Enhance Accessibility Skills",
        difficulty: 1,
        milestones: [
          {
            id: 25,
            title: "Understand WCAG Guidelines",
            description: "Learn about Web Content Accessibility Guidelines",
            status: true,
          },
          {
            id: 26,
            title: "Implement ARIA Attributes",
            description: "Add ARIA roles and attributes to a project",
            status: false,
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
  {
    id: 3,
    name: "Per Hansen",
    jobTitle: "Web developer",
    goals: [
      {
        id: 5,
        name: "Build a Portfolio Website",
        difficulty: 1,
        milestones: [
          {
            id: 13,
            title: "Plan Website Structure",
            description: "Create a wireframe for the website",
            status: true,
          },
          {
            id: 14,
            title: "Learn Next.js",
            description: "Understand server-side rendering with Next.js",
            status: false,
          },
          {
            id: 15,
            title: "Deploy Website",
            description: "Use Vercel to deploy the portfolio site",
            status: false,
          },
        ],
      },

      {
        id: 6,
        name: "Learn Data Analysis",
        difficulty: 1,
        milestones: [
          {
            id: 16,
            title: "Learn Pandas",
            description: "Master data manipulation with Pandas",
            status: false,
          },
          {
            id: 17,
            title: "Visualize Data",
            description: "Create visualizations with Matplotlib",
            status: true,
          },
          {
            id: 18,
            title: "Work on a Project",
            description: "Analyze a dataset and present findings",
            status: false,
          },
        ],
      },
      {
        id: 11,
        name: "Learn TypeScript",
        difficulty: 2,
        milestones: [
          {
            id: 27,
            title: "Understand Basics",
            description: "Learn about types, interfaces, and enums",
            status: false,
          },
          {
            id: 28,
            title: "Refactor Project",
            description: "Convert a JavaScript project to TypeScript",
            status: false,
          },
        ],
      },
      {
        id: 12,
        name: "Improve SEO Skills",
        difficulty: 1,
        milestones: [
          {
            id: 29,
            title: "Learn Basics of SEO",
            description: "Understand how search engines rank pages",
            status: true,
          },
          {
            id: 30,
            title: "Optimize Website",
            description: "Apply SEO techniques to improve ranking",
            status: false,
          },
        ],
      },
    ],
    skills: ["Python", "Next.js", "Data Analysis", "Matplotlib", "Pandas"],
    totalPoints: 18.35,
  },
];

//export default { MockProfileData, MockLoginData };
