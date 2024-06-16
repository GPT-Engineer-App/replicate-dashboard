import { Box, VStack, Text, IconButton, Flex } from "@chakra-ui/react";
import { FaCog, FaEnvelopeOpenText, FaEnvelope, FaCheckCircle, FaReply } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" w="250px" p={4} h="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <VStack align="start" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Liop</Text>
        <Text fontSize="lg">Posts</Text>
        <VStack align="start" spacing={2}>
          <Flex align="center">
            <FaEnvelopeOpenText />
            <Text ml={2}>All Posts</Text>
          </Flex>
          <Flex align="center">
            <FaEnvelope />
            <Text ml={2}>Unread</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle />
            <Text ml={2}>Read</Text>
          </Flex>
          <Flex align="center">
            <FaReply />
            <Text ml={2}>Replied</Text>
          </Flex>
        </VStack>
      </VStack>
      <IconButton aria-label="Settings" icon={<FaCog />} size="lg" variant="outline" colorScheme="teal" />
    </Box>
  );
};

export default Sidebar;