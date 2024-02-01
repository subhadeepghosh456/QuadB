import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../Redux/bookingsSlice";

const Form = ({ name, language, show, handleCross }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();

  if (!show) return null;

  const handleBook = (e) => {
    e.preventDefault();
    if (!userName || !userEmail) {
      alert("please fill the form");
      return;
    }
    // addBooking({ userName, userEmail, name, language });

    dispatch(addItems({ userName, userEmail, name, language }));
    setUserName("");
    setUserEmail("");
    handleCross();
  };

  return (
    <div className="form-container">
      <div className="modal">
        <span className="cross" onClick={handleCross}>
          X
        </span>
        <form className="form">
          Movie Title:
          <input type="text" value={name} onChange={() => {}} />
          Movie Langueage:
          <input type="text" value={language} onChange={() => {}} />
          User Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          User Email:
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button onClick={handleBook}>Book</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
