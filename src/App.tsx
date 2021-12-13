import { ChakraProvider, Box, theme, CSSReset } from "@chakra-ui/react";
import User from "./Screens/User";
import Users from "./Screens/Users";
import Home from "./Screens/Home";
import Help from "./Screens/Help";
import Settings from "./Screens/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideTopNav from "./Layouts/SideTopNav";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Router>
      <SideTopNav>
        <Box p={4}>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/user" element={<User />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </SideTopNav>
    </Router>
  </ChakraProvider>
);
