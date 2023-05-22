import React from "react";
import { FaMapPin } from "react-icons/fa";
import "../stylesheets/Email.css";

export default function Email(props) {
  const { sender, subject, date, message } = props;
  return (
    <div>
      <div className="main-container">
        <div className="pin-container">
          <input type="checkbox" />
          <FaMapPin className="pin" />
        </div>
        <div className="email-header">
          <h4 className="news">{sender}</h4>
          <h4>{subject}</h4>
          <h4 className="date">{date}</h4>
        </div>
        <h5>{message}</h5>
      </div>
    </div>
  );
}
