import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { FriendsContext } from "../contexts/Friends";
import { useState, useEffect } from "react";

// images
import nameImage from "../images/name.png";
import birthImage from "../images/birth.png";
import emailImage from "../images/mail.png";
import phoneImage from "../images/phone.png";
import locationImage from "../images/loca.png";
import passwordImage from "../images/password.png";

const Profile = () => {
  // context
  const { user } = useContext(UserContext);
  const { friends } = useContext(FriendsContext);

  // states
  const [infoTitle, setInfoTitle] = React.useState("Hi, my name is");
  const [infoValue, setInfoValue] = React.useState("");

  useEffect(() => {
    if (user) {
      setInfoValue(user.name.first + " " + user.name.last);
    }
  }, [user]);

  const infoName = () => {
    setInfoTitle("Hi, my name is");
    setInfoValue(user.name.first + " " + user.name.last);
  };
  const infoBirth = () => {
    setInfoTitle("My birthday is");
    setInfoValue(user.dob.date);
  };
  const infoEmail = () => {
    setInfoTitle("My email is");
    setInfoValue(user.email);
  };
  const infoPhone = () => {
    setInfoTitle("My phone number is");
    setInfoValue(user.phone);
  };
  const infoLocation = () => {
    setInfoTitle("My location is");
    setInfoValue(user.location.city);
  };
  const infoPassword = () => {
    setInfoTitle("My password is");
    setInfoValue(user.login.password);
  };

  return (
    <>
      {user ? (
        <div className="user-card">
          <div className="user-card-top"></div>
          {console.log(user)}
          <div className="user-card-bottom">
            <img
              className="user-card-img"
              src={user.picture.large}
              alt="user"
            />
            <h3 className="user-card-title">{infoTitle}</h3>
            <h1 className="user-card-value">{infoValue}</h1>
            <div className="user-card-info-list">
              <button
                onMouseOver={() => infoName()}
                className="user-card-info-item"
              >
                <img
                  className="user-card-info-img"
                  src={nameImage}
                  alt="name"
                />
              </button>
              <button
                onMouseOver={() => infoEmail()}
                className="user-card-info-item"
              >
                <img
                  className="user-card-info-img"
                  src={emailImage}
                  alt="mail"
                />
              </button>
              <button
                onMouseOver={() => infoBirth()}
                className="user-card-info-item"
              >
                <img
                  className="user-card-info-img"
                  src={birthImage}
                  alt="birth"
                />
              </button>
              <button
                onMouseOver={() => infoLocation()}
                className="user-card-info-item"
              >
                <img
                  className="user-card-info-img"
                  src={locationImage}
                  alt="phone"
                />
              </button>
              <button
                onMouseOver={() => infoPhone()}
                className="user-card-info-item"
              >
                <img
                  className="user-card-info-img"
                  src={phoneImage}
                  alt="location"
                />
              </button>
              <button
                onMouseOver={() => infoPassword()}
                className="user-card-info-item"
              >
                <img
                  className="user-card-info-img"
                  src={passwordImage}
                  alt="password"
                />
              </button>
            </div>
          </div>
        </div>
        
      ) : (
        <Navigate to="/" />
      )}
{/* Return conditionel si user
Dans le return si user, ternaire pour friends */}
    </>
  );
};

export default Profile;
