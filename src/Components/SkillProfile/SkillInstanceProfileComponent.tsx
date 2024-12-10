const SkillInstanceProfile = (props: { skill: string }) => {
  return (
    <div className="skill-card">
      <span>{props.skill}</span>
    </div>
  );
};

export default SkillInstanceProfile;
