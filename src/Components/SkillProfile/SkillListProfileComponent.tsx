import { useContext, useState } from "react";
import { myContext, myContextType } from "../../App";
import "./SkillListComponent.css";
import SkillInstanceProfile from "./SkillInstanceProfileComponent";
import axios from "axios";

const API_URL = "https://localhost:7293/api";

const SkillListProfileComponent = () => {
  const { userProfile } = useContext(myContext) as myContextType;
  const [skillList, setSkillList] = useState(userProfile?.skillList || []);
  const [skillName, setSkillName] = useState("");
  const profileId = userProfile?.id;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillName(e.target.value);
  };

  const handleSubmit = async (param: React.FormEvent<HTMLFormElement>) => {
    param.preventDefault();

    if (!profileId) {
      console.error("Profile ID is missing.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/skill/profile/${profileId}`,
        {
          name: skillName,
        }
      );
      setSkillList((prev) => [...prev, response.data]); // Add the new skill to the list
      setSkillName(""); // Clear the input field after submission
    } catch (error) {
      console.error("Error submitting skill:", error);
    }
  };

  const handleDeleteSkill = (id: number) => {
    setSkillList((prev) => prev.filter((skill) => skill.id !== id));
  };

  return (
    <div className="container my-4">
      <h4 className="text-center mb-1">Kompetanse</h4>

      <form onSubmit={handleSubmit} className="add-skill-form">
        <input
          name="skillName"
          type="text"
          required
          placeholder="Legg til Kompetanse"
          onChange={handleNameChange}
          value={skillName}
        />
        <button
          className="add-skill-button"
          type="submit"
          disabled={skillName === ""}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em">
            <path
              fillRule="evenodd"
              d="M13.25 2.5H2.75a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25zM2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 15H2.75A1.75 1.75 0 011 13.25V2.75C1 1.784 1.784 1 2.75 1zM8 4a.75.75 0 01.75.75v2.5h2.5a.75.75 0 010 1.5h-2.5v2.5a.75.75 0 01-1.5 0v-2.5h-2.5a.75.75 0 010-1.5h2.5v-2.5A.75.75 0 018 4z"
            />
          </svg>
        </button>
      </form>

      <div className="skills-container">
        {skillList.map((skill) => (
          <SkillInstanceProfile
            key={skill.id}
            skill={skill}
            onDelete={handleDeleteSkill}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillListProfileComponent;
