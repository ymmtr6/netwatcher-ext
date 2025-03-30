import { Storage } from "@plasmohq/storage";
import type { NetworkData } from "@/lib/datamodel";

const storage = new Storage();

let ipCache: Record<string, string> = {};

// webRequers API を使ってリクエストを監視
chrome.webRequest.onCompleted.addListener(
  async (details) => {
    const url = new URL(details.url);
    const domain = url.hostname;
    const ip = details.ip || 'N/A';

    console.log(`Request to ${domain} with IP ${ip}`);
    if (ipCache[domain] !== ip) {
      ipCache[domain] = ip;
      console.log(`Cache updated for ${domain}: ${ip}`);
    }
  },
  { urls: ["<all_urls>"] }, ["responseHeaders"]
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "getIpCache") {
    const url = new URL(message.url);
    const ip = ipCache[url.hostname];
    sendResponse({ ip: ip || "N/A" });
    return true;
  }
  return false;
});
