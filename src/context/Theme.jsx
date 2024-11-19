"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...props }) => {
  return <NextThemesProvider>{children}</NextThemesProvider>;
};

export default ThemeProvider;
