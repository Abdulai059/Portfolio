import React from "react";
import { ThemeProvider } from "./context/ThemeContext";


import AppLayout from "./sections/Layout";

export const App = () => {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
