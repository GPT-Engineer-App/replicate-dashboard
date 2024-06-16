import { Box, Text } from "@chakra-ui/react";

const PostDetails = () => {
  return (
    <Box p={4} bg="white" h="100vh" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Post Details</Text>
      <Text>Select a post to view details.</Text>
    </Box>
  );
};

export default PostDetails;