import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { FaGithub, FaUser, FaSignOutAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #ffffff83;
  }
`;

const UserIconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 42px;
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  margin-left: 20px;
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  padding: 5px;
  border: 1px solid white;
  border-radius: 12px;
  background-color: transparent;
  color: white;
  margin-left: 20px;
`;

const UserName = styled.p`
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
`;

const LogoutIcon = styled(FaSignOutAlt)`
  margin-left: 10px;
  cursor: pointer;
  color: white;
  font-size: 1rem;

  &:hover {
    color: #ff6666;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #ffffff8c;
  padding: 2rem;
  border-radius: 8px;
  width: fit-content;
  text-align: center;

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }

  div {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const GithubButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  transition: background 0.3s;

  &:hover {
    background-color: #24292e;
  }

  svg {
    margin-right: 8px;
  }
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  color: #555;
  transition: background 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    margin-right: 8px;
  }
`;

const Auth = () => {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Assure que le portail ne s'affiche que côté client
  }, []);

  const handleLoginClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      {!session ? (
        <>
          <UserIconButton onClick={handleLoginClick}>
            <FaUser size={18} />
          </UserIconButton>
          {isMounted &&
            showPopup &&
            createPortal(
              <PopupOverlay onClick={handleClosePopup}>
                <PopupContent onClick={(e) => e.stopPropagation()}>
                  <p>Connectez-vous:</p>
                  <div>
                    <GithubButton onClick={() => signIn("github")}>
                      <FaGithub size={20} /> Github
                    </GithubButton>
                    <GoogleButton onClick={() => signIn("google")}>
                      <FcGoogle size={20} /> Google
                    </GoogleButton>
                  </div>
                </PopupContent>
              </PopupOverlay>,
              document.body
            )}
        </>
      ) : (
        <UserProfileContainer>
          {session.user?.image && (
            <Image
              src={session.user.image as string}
              alt="User Avatar"
              width={30}
              height={30}
              style={{ borderRadius: "8px" }}
            />
          )}
          <UserName>{session.user?.name}</UserName>
          <LogoutIcon onClick={() => signOut()} />
        </UserProfileContainer>
      )}
    </Container>
  );
};

export default Auth;
