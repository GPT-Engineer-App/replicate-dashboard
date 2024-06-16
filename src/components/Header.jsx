import { Box, Flex, Text, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="white" p={4} boxShadow="sm">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" color="gray.700">82 related posts found in the last 2 days. Upgrade to see unlimited posts of people who want your product.</Text>
        <Button colorScheme="teal" size="sm">Upgrade Now</Button>
      </Flex>
    </Box>
  );
};

export default Header;