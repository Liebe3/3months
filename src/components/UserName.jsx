import { useState } from "react";
const UserName = () => {
  const [nickname, setNickname] = useState("");
  const [isFullName, setIsFullName] = useState(false);

  const toggleName = () => {
    if (nickname.length >= 6) {
      setIsFullName(false);
    } else {
      setIsFullName(true);
    }
  }
    return (
      <div>
        <input
          type="text"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
        />
        <button onClick={toggleName}>check nickname</button>

        <h2>
          {isFullName ? "Nice you enter your nickname" : "please nickname only"}
        </h2>
      </div>
    );
  
};

export default UserName;
