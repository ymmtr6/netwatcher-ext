// import { useStorage } from "@plasmohq/storage/hook"
// import { ChakraProvider, defaultSystem, Box, Heading, Table } from "@chakra-ui/react";


// export type NetworkData = {
//   [domain: string]: { ip: string, timestamp: number };
// }

// function IndexPopup() {
//   const [historyUrls] = useStorage<NetworkData>("history_url", (data) => data || {});
//   const activeTab = "search.yahoo.co.jp";
//   return (
//     <ChakraProvider value={defaultSystem}>
//       <Box padding={4} minWidth="400px" maxWidth="800px">
//         <Heading as="h2" size="lg" mb={4}>
//           Network Monitor
//         </Heading>

//         <Box key={activeTab} mb={4} p={2} bg="gray.100" borderRadius="md">
//           <strong>Active Tab:</strong> {activeTab}
//         </Box>

//         <Box maxH="600px" overflowY="auto" border="1px solid #ccc" borderRadius="md">
//           <Table.Root size="sm" stickyHeader>
//             <Table.Header>
//               <Table.Row bg="bg.subtle">
//                 <Table.ColumnHeader>Domain</Table.ColumnHeader>
//                 <Table.ColumnHeader>IP Address</Table.ColumnHeader>
//               </Table.Row>
//             </Table.Header>
//             <Table.Body>
//               {Object.entries(historyUrls).map(([domain, value]) => (
//                 <Table.Row key={domain}>
//                   <Table.Cell fontWeight={domain === activeTab ? "bold" : "normal"}>{domain}</Table.Cell>
//                   <Table.Cell>{value.ip}</Table.Cell>
//                 </Table.Row>
//               ))}
//             </Table.Body>
//           </Table.Root>
//         </Box>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default IndexPopup;
