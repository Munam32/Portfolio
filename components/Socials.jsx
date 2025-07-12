import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Munam32" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/abdulmunamaziz/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
