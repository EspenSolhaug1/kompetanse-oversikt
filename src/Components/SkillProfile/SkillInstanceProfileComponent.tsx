
import { SkillType } from "../../types/UserType";

const SkillInstanceProfile = (props: { skill: SkillType }) => {
  return (
    <div className="skill-card">
      <span>{props.skill.name}</span>

    </div>
  );
};

export default SkillInstanceProfile;
