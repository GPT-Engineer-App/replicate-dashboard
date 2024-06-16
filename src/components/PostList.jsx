import { Box, Table, Thead, Tbody, Tr, Th, Td, Icon } from "@chakra-ui/react";
import { FaReddit, FaTwitter } from "react-icons/fa";

const posts = [
  { platform: "reddit", title: "Has anyone used Jobtread?", related: 94, posted: "2h ago" },
  { platform: "reddit", title: "Best alternative to QuickBooks?", related: 92, posted: "2d ago" },
  { platform: "reddit", title: "Scheduling Software Recommendations (CAD)", related: 87, posted: "2d ago" },
  { platform: "reddit", title: "How can e-commerce stores streamline the calculation and collection of sales", related: 86, posted: "4h ago" },
  { platform: "reddit", title: "Salesforce CPQ", related: 85, posted: "2d ago" },
  { platform: "twitter", title: "Efficiency meets precision when you integrate your field service software with", related: 94, posted: "2d ago" },
  { platform: "twitter", title: "Struggling with outdated processes and inefficient workflows? Legacy systems", related: 88, posted: "2d ago" },
  { platform: "twitter", title: "Challenges in Data Analytics: Data simulations generate exabytes of data", related: 80, posted: "2d ago" },
];

const PostList = () => {
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Post</Th>
            <Th>Related</Th>
            <Th>Posted</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((post, index) => (
            <Tr key={index}>
              <Td>
                <Flex align="center">
                  <Icon as={post.platform === "reddit" ? FaReddit : FaTwitter} mr={2} />
                  {post.title}
                </Flex>
              </Td>
              <Td>{post.related}</Td>
              <Td>{post.posted}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PostList;