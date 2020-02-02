import React from "react";
import "./styles.css";
import UserInfo from "./components/Contact.js";
import UserData from "./components/ContactList.js";

export default function App() {
  return (
    <div className="App">
      {UserData.map(element => {
        return (
          <UserInfo
            avatar={element.avatar}
            name={element.name}
            text={element.text}
          />
        );
      })}
    </div>
  );
}
