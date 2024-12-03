import { useContext } from "react";
import { myContext, myContextType } from "../../App";
import SkillInstanceProfile from "./SkillInstanceProfileComponent";

const SkillListProfileComponent = () => {
  const { userProfile } = useContext(myContext) as myContextType;

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Kompetanse</h2>
      <div className="row g-3">
        {userProfile?.skills.map((skill, index) => (
          <SkillInstanceProfile key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillListProfileComponent;
