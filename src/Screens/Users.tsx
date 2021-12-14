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
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../Api/Users";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    getUsers().then((users: UserType[]) => {
      setUsers(users);
    });
  }, []);
  const editUser = (user: UserType) => {
    navigate("/user", { state: { user: user } });
  };
  const deleteThisUser = (user: UserType) => {
    deleteUser(user);
    getUsers().then((users: UserType[]) => {
      setUsers(users);
    });
  };
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
            <Th>Actions</Th>
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
                <Td>
                  <EditIcon onClick={() => editUser(user)} />{" "}
                  <CloseIcon onClick={() => deleteThisUser(user)} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Users;
