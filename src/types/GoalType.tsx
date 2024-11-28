import { MilestoneType } from "./MilestoneType";

export interface GoalType {
  id: number;
  name: string;
  milestones: MilestoneType[];
}
