import React from "react";
import "./Contact.css";

function UserInfo(props) {
  const dotClassName =
    props.text === "online" ? "status-online" : "status-offline";

  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <span className={dotClassName} />
          <span className="status-text">{props.text}</span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
