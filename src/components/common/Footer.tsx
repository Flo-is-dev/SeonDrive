"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Section = styled.section`
  height: 100%;
  padding: 4rem;
  color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10%;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    gap: 3%;
    padding: 2rem 4rem;
    margin-bottom: 50px;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 500;
    font-size: 0.9rem;
  }

  p:has(strong) {
    margin-bottom: 10px;
  }

  .social-icon-container {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    svg {
      font-size: 1.2rem;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  list-style-type: none;
  color: var(--text-color-gray);

  li {
    margin-bottom: 5px;
  }
`;

const renters = [
  { name: "About Us", href: "/about" },
  { name: "How it works", href: "#" },
  { name: "Our fleet", href: "/vehicules" },
  { name: "FAQ's", href: "#" },
  { name: "Contacts", href: "/contacts" },
  { name: "Locations", href: "#" },
];

const resources = [
  { name: "Media & Blog", href: "/blog" },
  { name: "Partners", href: "#" },
  { name: "Privacy policy", href: "#" },
  { name: "Cookies policy", href: "#" },
  { name: "Legal information", href: "#" },
  { name: "Help center", href: "#" },
];

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f4c6a4;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <Section>
      <div>
        <h4>SeonDrive</h4>
        <p>Via Callicratide 36</p>
        <p>
          <small>Roisson, Aosta(AOI), 111 000</small>
        </p>
        <p>
          <small>032 0575190</small>
        </p>
        <div className="social-icon-container">
          <SocialIcon
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIcon>
          <SocialIcon
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </SocialIcon>
        </div>
      </div>

      <div>
        <h4>{t("ForRenters")}</h4>
        <Ul>
          {renters.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </Ul>
      </div>

      <div>
        <h4>{t("Resources")}</h4>
        <Ul>
          {resources.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </Ul>
      </div>

      <div>
        <h4>{t("ContactUs")}</h4>
        <p>{t("MondaySunday")}</p>
        <p>
          <strong>{t("8:00")}</strong>
        </p>
        <p>{t("Hotline")}</p>
        <p>
          <strong>978-806-3277</strong>
        </p>
        <p>{t("Email")}</p>
        <a href="mailto:seondrive@gmail.com">
          <strong>seondrive@gmail.com</strong>
        </a>
      </div>
    </Section>
  );
};

export default Footer;
