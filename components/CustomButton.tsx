import { ButtonProps } from "@/types/type";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const getBgVarientStyle = (varient: ButtonProps["bgVariant"]) => {
  switch (varient) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVarientStyle = (varient: ButtonProps["textVariant"]) => {
  switch (varient) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

export default function CustomButton({
  title,
  onPress,
  bgVariant = "primary",
  className,
  textVariant = "default",
  IconLeft,
  IconRight,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`w-full rounded-full  p-3 justify-center items-center flex-row shadow-md shadow-neutral-400/70 ${getBgVarientStyle(bgVariant)} ${className}`}
      onPress={onPress}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`font-bold text-lg ${getTextVarientStyle(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
}
