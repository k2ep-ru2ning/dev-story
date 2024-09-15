import cn from "@/app/_lib/cn";
import Link from "next/link";
import { ComponentProps } from "react";

type Props = Pick<
  ComponentProps<typeof Link>,
  "href" | "className" | "children"
> & {
  isActive: boolean;
};

export default function IconLink({
  href,
  className,
  children,
  isActive,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-gray-200 dark:hover:bg-gray-700 w-8 h-8 flex justify-center items-center rounded-md",
        isActive && "text-indigo-500",
        className,
      )}
    >
      {children}
    </Link>
  );
}
