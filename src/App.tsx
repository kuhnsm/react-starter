import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  CSSReset,
  IconButton,
} from "@chakra-ui/react";
import User from "./Screens/User";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Router>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />

        <MenuList>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/users">Enter Users</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">About</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Box p={4}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<User />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/*<HookForm />*/}
      </Box>
    </Router>
  </ChakraProvider>
);
