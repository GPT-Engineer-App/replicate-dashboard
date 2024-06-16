import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50">
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">Welcome to the Dashboard</Text>
        <Text fontSize="lg" color="gray.600">Navigate through the sidebar to explore different sections.</Text>
      </VStack>
    </Container>
  );
};

export default Index;