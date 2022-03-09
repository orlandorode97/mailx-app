import React from "react";
import MailxLogo from "assets/logo-without-bg.png";
interface ILogo {
  className: string;
}
const Logo: React.FC<ILogo> = ({ className }) => {
  return <img src={MailxLogo} className={className} alt="logo" />;
};

export default Logo;
