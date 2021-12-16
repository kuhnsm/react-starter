import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import DesktopMenuItem from "./DesktopMenuItem";

const SideNav = () => {
  const [isMobile, isDesktop] = useMediaQuery([
    "(max-width: 768px)",
    "(min-width: 768px)",
  ]);
  return (
    <Box>
      {isDesktop && (
        <Flex align="start" border="1px" borderColor="gray.200" h="100vh">
          <Box w="200px" h="100%">
            <DesktopMenuItem to="/User">Enter Users</DesktopMenuItem>
            <DesktopMenuItem to="/Users">Users</DesktopMenuItem>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default SideNav;
