import axios from "axios";
import { ChangeEvent, useContext, useState } from "react";
import { myContext } from "../../App";

const API_URL = "https://localhost:7293/api";

const AddGoalComponent = () => {
  const [goalName, setGoalName] = useState("");
  const profileId = useContext(myContext).userProfile?.id;

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    const value = e.target;
    console.log(value);
    //setGoalName(value);

    /**
     *
     * FIX THIS 16. dec 2024
     * VALUE & HANDLECHANGE NEEDS WORK
     *
     */
  };

  const handleSubmit = async (param: React.FormEvent<HTMLFormElement>) => {
    param.preventDefault();
    console.log(param);
    //await axios.post(`${API_URL}/goal/profile/${props.profileId}`, param);
  };

  return (
    <div className="addGoalContainer">
      <div>
        <form onSubmit={handleSubmit} className="add-goal-form">
          <input
            name="goalName"
            type="text"
            required
            placeholder="Add a Goal"
            onChange={(e) => handleChange(e)}
            value={goalName}
          />
          <button
            className="add-user-button"
            type="submit"
            disabled={goalName == ""}
          >
            ✅
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGoalComponent;
