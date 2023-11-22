import React, { FC } from "react";
import { TitleProps } from "./interfaces";

const Title: FC<TitleProps> = ({ className, text }) => {
  return <p className={`${className} font-poppins font-semibold tracking-[-0.44px] 3xl:text-xl text-base mb-[0.875rem]`}>{text}</p>;
};

export default Title;
