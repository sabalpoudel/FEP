import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const FooterContacts = [
  { icon: <LocationOnIcon />, value: "Muscat, Mawaleh 200, Oman, CA 94110" },
  {
    icon: <EmailIcon />,
    value: "evcentersinfo@outlook.com",
    href: "mailto:evcentersinfo@outlook.com",
  },
  {
    icon: <PhoneIcon />,
    value: "1-800-800-2299 (Support)",
    href: "tel:1-800-800-2299",
  },
];

const FooterLinks = [
  {
    title: "community",
    links: [
      { key: "learners", href: "/learners" },
      { key: "partners", href: "/partners" },
      { key: "developers", href: "/developers" },
      { key: "beta_testers", href: "/beta-testers" },
      { key: "translators", href: "/translators" },
      { key: "blog", href: "/blog" },
      { key: "tech_blog", href: "/tech-blog" },
      { key: "teaching_center", href: "/teaching-center" },
    ],
  },
  {
    title: "informations",
    links: [
      { key: "about", href: "/about" },
      { key: "pricing", href: "/pricing" },
      { key: "blog", href: "/blog" },
      { key: "careers", href: "/careers" },
      { key: "contact", href: "/contact" },
    ],
  },
  {
    title: "more",
    links: [
      { key: "press", href: "/press" },
      { key: "investors", href: "/investors" },
      { key: "terms", href: "/terms" },
      { key: "privacy", href: "/privacy" },
      { key: "help", href: "/help" },
      { key: "accessibility", href: "/accessibility" },
      { key: "contact", href: "/contact" },
      { key: "articles", href: "/articles" },
      { key: "directory", href: "/directory" },
      { key: "affiliates", href: "/affiliates" },
    ],
  },
];

export { FooterContacts, FooterLinks };
