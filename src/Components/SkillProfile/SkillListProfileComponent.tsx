import { useContext } from "react";
import { myContext, myContextType } from "../../App";
import SkillInstanceProfile from "./SkillInstanceProfileComponent";
import "./SkillListComponent.css";

const SkillListProfileComponent = () => {
  const { currentUser } = useContext(myContext) as myContextType;

  return (
    <div className="container my-4 skill-box">
      <h2 className="text-center mb-4">Kompetanse</h2>
      <div className="row g-3">
        {currentUser?.skills.map((skill, index) => (
          <SkillInstanceProfile key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillListProfileComponent;
