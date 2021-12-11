import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  CSSReset,
  IconButton,
} from "@chakra-ui/react";
import User from "./Screens/User";
import Users from "./Screens/Users";
import Home from "./Screens/Home";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
            <Link to="/user">Enter Users</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/users">Users</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Box p={4}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/*<HookForm />*/}
      </Box>
    </Router>
  </ChakraProvider>
);
