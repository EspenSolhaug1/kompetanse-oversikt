import { UserType } from "../types/UserType";

export const MockData: UserType = {
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
};
