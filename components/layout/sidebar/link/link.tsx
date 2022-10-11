import React, { useCallback, useState } from "react";
import { ChevronDown } from "react-feather";
import { IconText, IconTextProps } from "../../../../common/icon-text";
import NextLink from "next/link";
import { LinkType } from "./types";

export type LinkProps = IconTextProps &
  LinkType & {
    children?: React.ReactNode;
  };

const Link = ({ icon, text, color, children, href }: LinkProps) => {
  const [open, setOpen] = useState(false);
  const textColor = `text-${color}-500`;

  const handleOpen = useCallback(() => {
    if (children) setOpen((prev) => !prev);
  }, []);

  return (
    <NextLink href={href}>
      <div
        onClick={handleOpen}
        className={`p-2 rounded-md hover:bg-zinc-700 cursor-pointer font-mediums`}
      >
        <IconText
          icon={icon}
          text={text}
          color={color}
          iconColor={textColor}
          rightIcon={
            children && <ChevronDown onClick={(e) => e.preventDefault()} />
          }
        />
        {open && <div className="mt-2">{children}</div>}
      </div>
    </NextLink>
  );
};

export default Link;
