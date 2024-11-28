import { GoalType } from "./GoalType";

export interface UserType {
  id: number;
  name: string;
  goals: GoalType[];
  skills: string[];
  totalPoints: number;
}
