import "./SkillListComponent.css";

const SkillInstanceProfile = (props: { skill: string; index: number }) => {
  return (
    <div className="skillInstanceComponent">
        <span>{props.skill}</span>
    </div>
  );
};

export default SkillInstanceProfile;
