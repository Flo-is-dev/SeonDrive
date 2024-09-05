"use client"; 

import styled from "styled-components";

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const NotFoundTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const NotFoundMessage = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #666;
`;

const HomeLink = styled.a`
  display: inline-block;
  margin-top: 2rem;
  color: blue;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: darkblue;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundMessage>
        <p>Nous sommes désolés, la page que vous recherchez existe pas.</p>
      </NotFoundMessage>
      <HomeLink href="/"><p>Retour à l`accueil</p></HomeLink>
    </NotFoundContainer>
  );
}
