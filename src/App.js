import React from "react";
import "./styles.css";
import UserInfo from "./components/Contact.js";

export default function App() {
  return (
    <div className="App">
      <UserInfo
        avatar="https://randomuser.me/api/portraits/women/69.jpg"
        name="Beverley Matthews"
        text="online"
      />
      <UserInfo
        avatar="https://randomuser.me/api/portraits/men/22.jpg"
        name="Jeffery Hayes"
        text="offline"
      />
      <UserInfo
        avatar="https://randomuser.me/api/portraits/women/51.jpg"
        name="Lily Baker"
        text="online"
      />
    </div>
  );
}
