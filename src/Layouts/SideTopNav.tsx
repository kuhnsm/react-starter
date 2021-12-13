import { Box, Flex } from "@chakra-ui/react";
import TopNav from "../Components/TopNav";
import SideNav from "../Components/SideNav";
import { ReactChild } from "react";

const SideTopNav = ({ children }: { children: ReactChild }) => {
  return (
    <Box>
      <TopNav />
      <Flex align="start">
        <SideNav />
        <Box>{children}</Box>
      </Flex>
    </Box>
  );
};

export default SideTopNav;
