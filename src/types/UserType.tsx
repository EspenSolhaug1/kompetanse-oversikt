import { GoalType } from "./GoalType";

export interface UserType {
  id: number;
  name: string;
  jobTitle: string;
  goalList: GoalType[];
  skillList: SkillType[];
  totalPoints: number;
}

export interface SkillType {
  id: number;
  name: string;
}
