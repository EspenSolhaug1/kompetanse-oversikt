import { useContext } from "react";
import { myContext, myContextType } from "../../App";
import "./SkillListComponent.css";
import SkillInstanceProfile from "./SkillInstanceProfileComponent";

const SkillListProfileComponent = () => {
  const { userProfile } = useContext(myContext) as myContextType;
  console.log(userProfile?.skills);
  return (
    <div className="container my-4">
      <h4 className="text-center mb-4">Kompetanse</h4>
      <div className="skills-container">
        {userProfile?.skillList.map((skill, index) => (
          <SkillInstanceProfile key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillListProfileComponent;
