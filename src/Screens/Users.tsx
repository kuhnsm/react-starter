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
} from "@chakra-ui/react";
import UserType from "../Models/User";

export default function Users() {
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    getUsers().then((users: UserType[]) => {
      console.log(users);
      setUsers(users);
    });
  }, []);
  return (
    <Box>
      <Heading ml={15}>Users</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Gender</Th>
            <Th>Marital Status</Th>
            <Th>Birthdate</Th>
            <Th>Salary</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user: UserType) => {
            return (
              <Tr key={user.id}>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.gender}</Td>
                <Td>{user.maritalStatus}</Td>
                <Td>{user.birthdate}</Td>
                <Td>{user.salary}</Td>
                <Td>{user.active ? "Active" : "Inactive"}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
