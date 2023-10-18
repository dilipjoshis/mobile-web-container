import React from "react";
import { ButtonProps } from "./Button.types";
import Button from "@mui/material/Button";

const CustomButton: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  children,
  onClick,
  ...props
}) => {
  return <Button disabled={disabled}>Contained</Button>;
};

export default CustomButton;
