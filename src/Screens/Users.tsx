import { useEffect, useState } from "react";
import { getUsers } from "../Api/Users";

import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
} from "@chakra-ui/react";

export default function Users() {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    getUsers().then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <Box>
      <Heading ml={15}>Users!!!!</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Avatar</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user: any) => {
            return (
              <Tr key={user.id}>
                <Td>
                  <Image src={user.avatar}></Image>
                </Td>
                <Td>{user.first_name}</Td>
                <Td>{user.last_name}</Td>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
