import { Box, Button, ButtonGroup } from "@chakra-ui/react";

const Tabs = () => {
  return (
    <Box bg="white" p={4} boxShadow="sm">
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="teal">All</Button>
        <Button colorScheme="teal">Twitter</Button>
        <Button colorScheme="teal">Reddit</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Tabs;