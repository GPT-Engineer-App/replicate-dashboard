import { Box, Text } from "@chakra-ui/react";

const PostDetails = () => {
  return (
    <Box p={4} bg="gray.50" h="100vh">
      <Text fontSize="xl" fontWeight="bold">Post Details</Text>
      <Text>Select a post to view details.</Text>
    </Box>
  );
};

export default PostDetails;