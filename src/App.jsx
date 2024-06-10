import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navigation from "./components/Navigation.jsx";
import Index from "./pages/Index.jsx";
import AboutLunXun from "./pages/AboutLunXun.jsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about-lunxun" element={<AboutLunXun />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
