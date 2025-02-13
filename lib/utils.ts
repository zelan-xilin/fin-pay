import { Dimensions, Image } from "react-native";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
export const validateEmail = (str: string) => emailRegex.test(str);

export const getScreen = () => {
  return Dimensions.get("window");
};

export const getImageSize = (uri: string) => {
  return new Promise((resolve) => {
    Image.getSize(uri, (width, height) => {
      resolve({ width, height, ratio: width / height });
    });
  });
};
