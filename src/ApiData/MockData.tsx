import { UserType } from "../types/UserType";

export const MockData: UserType[] = [
  {
    id: 1,
    name: "Ola Nordmann",
    goals: [
      {
        id: 1,
        name: "Learn Csharp",
        milestones: [
          {
            id: 1,
            title: "Basics",
            category: "programming",
            description: "Intro to Csharp",
            status: false,
          },
          {
            id: 2,
            title: "Syntax",
            category: "programming",
            description: "Syntax for Csharp",
            status: false,
          },
          {
            id: 3,
            title: "Map hashMap to maps for mapping maps",
            category: "programming",
            description: "Treasure maps that maps hashmaps",
            status: true,
          },
        ],
      },
      {
        id: 2,
        name: "Practice use of cloud",
        milestones: [
          {
            id: 4,
            title: "Basics",
            category: "cloud",
            description: "Intro to AWS",
            status: false,
          },
          {
            id: 5,
            title: "Syntax",
            category: "programming",
            description: "Intro to Azure",
            status: true,
          },
          {
            id: 6,
            title: "Practical use of containers",
            category: "cloud",
            description:
              "T to deploy treasure maps in maps in clouds in the sky on a rainy day in Sweden",
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
    goals: [
      {
        id: 3,
        name: "Master React",
        milestones: [
          {
            id: 7,
            title: "React Basics",
            category: "programming",
            description: "Learn about components, props, and state",
            status: false,
          },
          {
            id: 8,
            title: "Advanced Hooks",
            category: "programming",
            description: "Understand useReducer, useCallback, and useMemo",
            status: true,
          },
          {
            id: 9,
            title: "React Testing",
            category: "testing",
            description: "Write tests for React components using Jest",
            status: true,
          },
        ],
      },
      {
        id: 4,
        name: "Contribute to Open Source",
        milestones: [
          {
            id: 10,
            title: "Find a Project",
            category: "community",
            description: "Search GitHub for beginner-friendly projects",
            status: false,
          },
          {
            id: 11,
            title: "Submit a PR",
            category: "development",
            description: "Fix a bug or add a feature and submit a pull request",
            status: true,
          },
          {
            id: 12,
            title: "Join Community Discussions",
            category: "community",
            description: "Participate in open-source discussions and forums",
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
      "Jest",
      "GitHub",
      "Community Engagement",
    ],
    totalPoints: 15.45,
  },
  {
    id: 3,
    name: "Per Hansen",
    goals: [
      {
        id: 5,
        name: "Build a Portfolio Website",
        milestones: [
          {
            id: 13,
            title: "Plan Website Structure",
            category: "design",
            description: "Create a wireframe for the website",
            status: true,
          },
          {
            id: 14,
            title: "Learn Next.js",
            category: "programming",
            description: "Understand server-side rendering with Next.js",
            status: false,
          },
          {
            id: 15,
            title: "Deploy Website",
            category: "devops",
            description: "Use Vercel to deploy the portfolio site",
            status: false,
          },
        ],
      },
      {
        id: 6,
        name: "Learn Data Analysis",
        milestones: [
          {
            id: 16,
            title: "Learn Pandas",
            category: "data",
            description: "Master data manipulation with Pandas",
            status: false,
          },
          {
            id: 17,
            title: "Visualize Data",
            category: "data",
            description: "Create visualizations with Matplotlib",
            status: true,
          },
          {
            id: 18,
            title: "Work on a Project",
            category: "data",
            description: "Analyze a dataset and present findings",
            status: false,
          },
        ],
      },
    ],
    skills: ["Python", "Next.js", "Data Analysis", "Matplotlib", "Pandas"],
    totalPoints: 18.35,
  },
];
