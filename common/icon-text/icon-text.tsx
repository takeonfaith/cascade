import React from "react";
import { Icon } from "react-feather";

export type IconTextProps = {
  text?: string;
  color?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  rightIcon?: React.ReactNode;
};

const IconText = ({ text, icon, rightIcon, iconColor }: IconTextProps) => {
  const acolor = `text-${iconColor}-400`;
  return (
    <div className="flex justify-between">
      <div className="flex w-full">
        <div className={`h-64 ${acolor}`}>{icon}</div>
        {text && <div className="text-blue-200 select-none">{text}</div>}
      </div>
      {rightIcon && <div className="text-blue-200">{rightIcon}</div>}
    </div>
  );
};

export default IconText;
