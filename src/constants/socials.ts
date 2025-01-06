import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";

import { SocialLinkType } from "../types";

export const socialsInfo: SocialLinkType[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:vinayk6378@gmail.com",
    icon: MdAlternateEmail,
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/n4ryn",
    icon: RxGithubLogo,
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/n4ryn/",
    icon: RxLinkedinLogo,
  },
  {
    id: 4,
    name: "Twitter",
    url: "https://twitter.com/n4ryn_",
    icon: RxTwitterLogo,
  },
];
