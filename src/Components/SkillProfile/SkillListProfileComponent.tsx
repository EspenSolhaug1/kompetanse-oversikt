import { useContext } from "react";
import { myContext, myContextType } from "../../App";
import SkillInstanceProfile from "./SkillInstanceProfileComponent";
const SkillListProfileComponent = () => {
  const { currentUser } = useContext(myContext) as myContextType;
  return (
    <div className="skills">
      <h2>Kompetanse</h2>
      <div className="skill-box">
        {currentUser?.skills.map((skill, index) => {
          return (
            <SkillInstanceProfile key={index} skill={skill} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillListProfileComponent;
