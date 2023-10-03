import React from "react";
import "./UserProfileInfo.css";
import { AiOutlineClose } from "react-icons/ai";

const UserProfileInfo = ({ setUserProfileActive, name }) => {
  return (
    <div className="userProfileInfo-container">
      <div className="userp-top">
        <h4>{name}</h4>
        <AiOutlineClose
          color="red"
          style={{ cursor: "pointer" }}
          onClick={() => setUserProfileActive(false)}
        />
      </div>
      <div className="userp-body">
        <span>Reviews:</span>
        <br />
        <span>Profile likes:</span>
      </div>
    </div>
  );
};

export default UserProfileInfo;
