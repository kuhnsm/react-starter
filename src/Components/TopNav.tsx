import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  IconButton,
  useMediaQuery,
  Text,
  HStack,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ReactChild } from "react";
import DesktopMenuItem from "./DesktopMenuItem";

const MobileMenu = () => {
  return (
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
  );
};

const DesktopMenu = () => {
  function Logo({ children }: { children: ReactChild }) {
    return (
      <Link to="/">
        <Text fontSize="2xl" p={3}>
          {children}
        </Text>
      </Link>
    );
  }
  return (
    <Flex border="1px" borderColor="gray.200">
      <Logo>My Cool Company</Logo>
      <Spacer />
      <HStack spacing="24px">
        <DesktopMenuItem to="/settings">Settings</DesktopMenuItem>
        <DesktopMenuItem to="/help">Help</DesktopMenuItem>
      </HStack>
    </Flex>
  );
};
const TopNav = () => {
  const [isMobile, isDesktop] = useMediaQuery([
    "(max-width: 768px)",
    "(min-width: 768px)",
  ]);
  return (
    <Box>
      {isMobile && <MobileMenu />}
      {isDesktop && <DesktopMenu />}
    </Box>
  );
};

export default TopNav;
