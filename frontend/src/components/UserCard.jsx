import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
  useToast,
  Badge,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
import { BASE_URL } from "../App";

const UserCard = ({ user, setUsers }) => {
  const toast = useToast();

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`${BASE_URL}/friends/${user.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
      toast({
        status: "success",
        title: "Deleted",
        description: "User has been removed.",
        duration: 2000,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Card
      bg={cardBg}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
      boxShadow="sm"
      _hover={{ boxShadow: "md", transform: "scale(1.01)" }}
      transition="all 0.2s"
    >
      <CardHeader pb={0}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={4}>
            <Avatar name={user.name} src={user.imgUrl} size="md" />

            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Badge colorScheme="blue" mt={1}>
                {user.role}
              </Badge>
            </Box>
          </Flex>

          <Flex gap={1}>
            <EditModal user={user} setUsers={setUsers} />
            <Tooltip label="Delete user" fontSize="sm">
              <IconButton
                aria-label="Delete user"
                icon={<BiTrash />}
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={handleDeleteUser}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody pt={2}>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
          {user.description}
        </Text>
      </CardBody>
    </Card>
  );
};

export default UserCard;
