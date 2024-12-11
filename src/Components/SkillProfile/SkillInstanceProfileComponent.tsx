import { SkillType } from "../../types/UserType";

const SkillInstanceProfile = (props: { skill: SkillType; index: number }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div
        className="card text-center p-3 skill-card"
        style={{ background: "#005b5b", color: "white" }}
      >
        <span>{props.skill.name}</span>
      </div>
    </div>
  );
};

export default SkillInstanceProfile;
