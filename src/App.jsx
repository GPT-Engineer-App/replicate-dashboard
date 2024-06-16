import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import PostList from "./components/PostList.jsx";
import PostDetails from "./components/PostDetails.jsx";
import Tabs from "./components/Tabs.jsx";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Flex>
        <Sidebar />
        <Box flex="1" bg="gray.50">
          <Header />
          <Tabs />
          <Flex>
            <Box flex="2" p={4}>
              <PostList />
            </Box>
            <Box flex="1" p={4} bg="white" boxShadow="md">
              <PostDetails />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;