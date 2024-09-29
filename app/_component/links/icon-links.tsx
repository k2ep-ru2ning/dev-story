import {
  DocumentTextIcon,
  HomeIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import IconLink from "./icon-link";
import { ReactNode } from "react";

type IconLinkType = {
  link: string;
  icon: ReactNode;
  tooltipText: string;
};

export default function IconLinks() {
  const links: IconLinkType[] = [
    {
      link: "/",
      icon: <HomeIcon className="size-6" />,
      tooltipText: "홈",
    },
    {
      link: "/posts/pages/1",
      icon: <DocumentTextIcon className="size-6" />,
      tooltipText: "글 목록",
    },
    {
      link: "/tags",
      icon: <TagIcon className="size-6" />,
      tooltipText: "태그 목록",
    },
  ];

  return (
    <nav className="flex gap-3">
      {links.map(({ link, icon, tooltipText }, idx) => (
        <IconLink key={idx} href={link} icon={icon} tooltipText={tooltipText} />
      ))}
    </nav>
  );
}
