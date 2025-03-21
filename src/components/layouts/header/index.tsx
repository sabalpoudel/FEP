import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import XIcon from "@mui/icons-material/X";
import { Avatar, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import InstagramIcon from "@mui/icons-material/Instagram";

import { HeaderWrapper } from "./HeaderWrapper";
import { InputField } from "../../bits/InputField";

type THeader = {
  className?: string;
};

const Contacts = [
  {
    icon: <MailIcon />,
    value: "evcentersinfo@gmail.com",
    href: "mailto:evcentersinfo@gmail.com",
  },
  {
    icon: <CallIcon />,
    value: "1234567890",
    href: "tel:1234567890",
  },
];

const Socials = [
  {
    title: "X",
    icon: <XIcon />,
    href: "https://x.com",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    href: "https://instagram.com",
  },
];

const Header1 = [
  {
    href: "/",
    alt: "bp-logo",
    src: "/assets/images/logo/Logo-bp.png",
  },
  { line: true },
  {
    href: "/",
    alt: "fep-logo",
    src: "/assets/images/logo/Logo.png",
  },
  { line: true },
  {
    href: "/home",
    label: "explore",
  },
];
const Header2 = [
  {
    href: "/dashboard",
    label: "home",
  },
  {
    href: "/courses",
    label: "courses",
  },
  {
    href: "/materials",
    label: "materials",
  },
  {
    href: "/games",
    label: "games",
  },
];
const Header: React.FC<THeader> = ({}) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <HeaderWrapper className="hw">
      <header className="hw-wrapper">
        <div className="hw-1">
          <div className="hw-size hw-1-content">
            <div className="hw-1-content-contact">
              {Contacts.map((contact) => {
                return (
                  <Typography
                    component="a"
                    color="black"
                    target="_blank"
                    variant="caption"
                    href={contact.href}
                    key={contact.value}
                    className="hw-1-content-contact-item"
                  >
                    {contact.icon}
                    <span>{contact.value}</span>
                  </Typography>
                );
              })}
            </div>
            <div className="hw-1-content-socials">
              {Socials.map((social) => {
                return (
                  <a
                    href={social.href}
                    title={social.title}
                    key={social.title}
                    className="hw-1-content-socials-item"
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hw-2">
          <div className="hw-size hw-2-content">
            <div className="hw-2-content-left">
              {Header1.map((item) => {
                if (item.src)
                  return (
                    <a
                      target="_blank"
                      key={item.alt}
                      href={item.href}
                      className={`hw-2-content-left-a hw-2-content-left-a-${item.alt}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="hw-2-content-left-img"
                      />
                    </a>
                  );
                else if (item.href)
                  return (
                    <Typography
                      to={item.href}
                      color="primary"
                      key={item.label}
                      component={Link}
                      fontWeight={600}
                      className="hw-2-content-left-label"
                    >
                      {t(item?.label || "")}
                    </Typography>
                  );
                else return <div className="hw-2-content-left-line" />;
              })}
            </div>
            <div className="hw-2-content-right">
              <div className="hw-2-content-right-menu">
                {Header2.map((item) => {
                  const isActive = pathname === item.href ? "active" : "";
                  return (
                    <Typography
                      color="black"
                      to={item.href}
                      key={item.label}
                      component={Link}
                      fontWeight={600}
                      className={`hw-2-content-right-menu-item hw-2-content-right-menu-item-${isActive}`}
                    >
                      {t(item?.label || "")}
                    </Typography>
                  );
                })}
              </div>
              <div className="hw-2-content-right-end">
                <div className="hw-2-content-right-end-search">
                  <InputField
                    variant="outlined"
                    slotProps={{
                      input: {
                        className: "hw-2-content-right-end-search-input",
                      },
                    }}
                    placeholder={t("search")}
                    endAdornment={<SearchIcon />}
                    className="hw-2-content-right-end-search-input"
                  />
                </div>
                <div className="hw-2-content-right-end-profile">
                  <Avatar
                    color="primary"
                    src="/broken-image.jpg"
                    className="hw-2-content-right-end-profile-avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
};

export default Header;
