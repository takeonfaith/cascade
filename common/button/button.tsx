import React from "react";
import { IconText, IconTextProps } from "../icon-text";

type ButtonProps = IconTextProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    background?: string;
    hoverBackground?: string;
    restProps?: any[];
  };

const Button = ({
  icon,
  text,
  color,
  background,
  hoverBackground,
  ...restProps
}: ButtonProps) => {
  return (
    <button className="p-2 rounded-md bg-zinc-400" {...restProps}>
      <IconText icon={icon} text={text} color={color} />
    </button>
  );
};

export default Button;
