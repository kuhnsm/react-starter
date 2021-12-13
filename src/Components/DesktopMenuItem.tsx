import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactChild } from "react";

interface DesktopMenuProps {
  children: ReactChild;
  to: string;
}
export default function DesktopMenuItem({ children, to }: DesktopMenuProps) {
  return (
    <Link to={to}>
      <Text fontSize="2xl" p={3}>
        {children}
      </Text>
    </Link>
  );
}
