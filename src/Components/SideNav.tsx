import { Box, Flex } from "@chakra-ui/react";
import DesktopMenuItem from "./DesktopMenuItem";

const SideNav = () => {
  return (
    <Flex align="start" border="1px" borderColor="gray.200" h="100vh">
      <Box w="200px" h="100%">
        <DesktopMenuItem to="/User">Enter Users</DesktopMenuItem>
        <DesktopMenuItem to="/Users">Users</DesktopMenuItem>
      </Box>
    </Flex>
  );
};

export default SideNav;
