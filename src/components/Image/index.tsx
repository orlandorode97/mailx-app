import React from "react";

interface ImageProps {
  imgClass: string;
  source: string;
}

const Image: React.FC<ImageProps> = ({ imgClass, source }) => {
  return <img className={imgClass} src={source} alt="logo-oues" />;
};

export default Image;
