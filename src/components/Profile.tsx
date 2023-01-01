import styled from "styled-components";
import Button from "./Button";

import Nick from "./Nick";

const Profile = () => {
  const GithubHandler = () => {
    window.location.href = "https://github.com/fnwk";
  };
  const ContactHandler = () => {
    window.location.href = "mailto:filip@wnek.cc";
  };

  return (
    <ProfileStyled>
      <Nick />
      <div className="btnContainer">
        <Button text="Github" char="{" click={GithubHandler} />
        <Button text="Contact" char="@" click={ContactHandler} />
      </div>
    </ProfileStyled>
  );
};

export default Profile;

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  .btnContainer {
    margin-block: 50px;
    display: flex;
    justify-content: space-around;
  }
`;
