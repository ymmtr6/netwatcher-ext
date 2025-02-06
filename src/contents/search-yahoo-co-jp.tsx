import type { PlasmoCSConfig } from "plasmo"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react";
import { ChakraProvider, defaultSystem, Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

export const config: PlasmoCSConfig = {
  matches: ["https://search.yahoo.co.jp/*"],
  all_frames: true
};

const styleElement = document.createElement("style")
const styleCache = createCache({
  key: "plasmo-mui-cache",
  prepend: true,
  container: styleElement
})
export const getStyle = () => styleElement;

const domain = "search.yahoo.co.jp";

const StatusBox = () => {

  console.log("TEST");

  const historyUrls = {
    "search.yahoo.co.jp": {
      ip: "0", timestamp: 0
    }
  };

  useEffect(() => {
    document.head.appendChild(styleElement);
  }, []);
  //useStorage<NetworkData>("history_url", (data) => data || {});

  const hasHistory = Object.keys(historyUrls).includes(domain);
  console.log('hasHistory', hasHistory);
  return (
    <CacheProvider value={styleCache}>
      <ChakraProvider value={defaultSystem}>
      {hasHistory && (<Box
          position="fixed"
          top="10px"
          left="1rem"
          bg="red.500"
          color="white"
          px="8px"
          py="4px"
          borderRadius="md"
          fontWeight="bold"
          zIndex="9999"
          boxShadow="lg"
      >
          <Text textStyle="lg">Network Monitor</Text>
          <Text textStyle="4xl">{historyUrls[domain].ip}</Text>
        </Box>)}
      </ChakraProvider>
    </CacheProvider>
  )
};

export default StatusBox;
