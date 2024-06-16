import { Box, Button, ButtonGroup } from "@chakra-ui/react";

const Tabs = () => {
  return (
    <Box bg="white" p={4} boxShadow="md">
      <ButtonGroup variant="outline" spacing="6">
        <Button>All</Button>
        <Button>Twitter</Button>
        <Button>Reddit</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Tabs;