import React from "react";
import { useTranslation } from "react-i18next";
import { FooterWrapper } from "./FooterWrapper";
import { FooterContacts, FooterLinks } from "./constants";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper className="fw">
      <div className="fw-1">
        <div className="fw-size fw-1-content">
          <div className="fw-1-content-right">
            {FooterContacts.map((contact) => (
              <Typography
                component="a"
                color="black"
                target="_blank"
                href={contact.href}
                key={contact.value}
                className="fw-1-content-right-item"
              >
                {contact.icon}
                <Typography
                  variant="body2"
                  component="span"
                  className="fw-1-content-right-item-text"
                >
                  {contact.value}
                </Typography>
              </Typography>
            ))}
          </div>
          <div className="fw-1-content-left">
            {FooterLinks.map((section) => (
              <div key={section.title} className="fw-1-content-left-section">
                <Typography
                  variant="h6"
                  fontWeight={600}
                  className="fw-1-content-left-section-title"
                >
                  {t(section.title)}
                </Typography>
                <ul className="fw-1-content-left-section-ul">
                  {section.links.map((link) => (
                    <Typography
                      component="li"
                      key={link.key}
                      className="fw-1-content-left-section-ul-item"
                    >
                      <Typography
                        color="black"
                        to={link.href}
                        variant="body2"
                        component={Link}
                      >
                        {t(link.key)}
                      </Typography>
                    </Typography>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fw-2">
        <div className="fw-size fw-2-content">
          <Typography variant="body2" color="black" align="center">
            Copyright &copy; 2021 Engineering Village
          </Typography>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
