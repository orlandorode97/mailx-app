import React, { MouseEventHandler } from "react";

interface HiIconProps {
  onClickEvent?: MouseEventHandler<HTMLSpanElement>;
  className?: string;
  children: JSX.Element;
}

const HiIcon: React.FC<HiIconProps> = ({
  className,
  onClickEvent,
  children,
}) => {
  return (
    <span className={className} onClick={onClickEvent}>
      {children}
    </span>
  );
};

export default HiIcon;
