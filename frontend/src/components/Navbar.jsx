"use client"

import {
  Box,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  Image,
  HStack,
  IconButton,
  Tooltip,
  Button,
  Stack,
} from "@chakra-ui/react"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"
import CreateUserModal from "./CreateUserModal"

const Navbar = ({ setUsers }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue("whiteAlpha.800", "gray.900")
  const border = useColorModeValue("gray.200", "gray.700")
  const boxShadow = useColorModeValue("0 4px 10px rgba(0, 0, 0, 0.05)", "0 4px 10px rgba(0, 0, 0, 0.2)")

  return (
    <Box py={4} px={2} bg="transparent">
      <Container maxW="container.xl">
        <Box
          py={3}
          px={{ base: 4, md: 6 }}
          borderRadius="2xl"
          bg={bg}
          border="1px solid"
          borderColor={border}
          boxShadow={boxShadow}
          backdropFilter="blur(12px)"
          transition="all 0.3s ease"
        >
          <Flex align="center" justify="space-between" flexWrap="wrap" gap={4}>
            {}
            <HStack spacing={3}>
              <Button variant="ghost" colorScheme="blue">
                Home
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Users
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Settings
              </Button>
            </HStack>

            {}
            <HStack spacing={3}>
              <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"} openDelay={300}>
                <IconButton
                  aria-label="Toggle color mode"
                  icon={colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                  onClick={toggleColorMode}
                  variant="ghost"
                  colorScheme={colorMode === "light" ? "purple" : "orange"}
                  borderRadius="full"
                />
              </Tooltip>

              <CreateUserModal setUsers={setUsers} />
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
