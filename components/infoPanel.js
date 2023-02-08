import React from "react";
import { Col } from "reactstrap";
import Image from "next/image";

export default function InfoPanel(props) {
  const { bio, userData } = props;
  const profilePicture = "/assets/default.jpeg";

  return (
    <Col>
      <Image
        className="avatar"
        src={profilePicture}
        alt="Users Profile Pic"
        height="70px"
        width="70px"
      />

      <h2>About Me</h2>
      <p className="bio-container">{bio}</p>

      <h2>Contact Details</h2>
      <p>
        <span>{`Email: ${userData.email || ""}`}</span>
        <br />
        <span>{`LinkedIn: ${userData.linkedin || ""}`}</span>
      </p>
    </Col>
  );
}
