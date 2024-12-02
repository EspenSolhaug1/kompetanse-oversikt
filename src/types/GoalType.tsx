import { MilestoneType } from "./MilestoneType";

export interface GoalType {
  id: number;
  name: string;
  difficulty: number;
  milestones: MilestoneType[];
}
