import React from 'react';
import { createContext } from "react";

export const themes = {
    dark: "",
    light: "white-content",
  };
  
  export const ThemeContext = createContext({
      theme: themes.dark,
    changeTheme: () => {},
  });
  

function Theme() {
  return <div></div>;
}

export default Theme;
