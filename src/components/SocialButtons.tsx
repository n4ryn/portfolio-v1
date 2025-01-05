import { SocialLink } from "../types";

const SocialButtons = ({ social }: { social: SocialLink }) => {
  const Icon = social.icon;

  const handleClick = () => {
    if (social.isEmail) {
      window.location.href = social.url;
    } else {
      window.open(social.url, "_blank", "noopener noreferrer");
    }
  };
  return (
    <button
      onClick={handleClick}
      className="btn-secondary rounded-full"
      aria-label={`Visit ${social.name}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
};

export default SocialButtons;
