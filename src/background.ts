import { Storage } from "@plasmohq/storage";
import type { NetworkData } from "@/lib/datamodel";

const storage = new Storage();

// webRequers API を使ってリクエストを監視
chrome.webRequest.onCompleted.addListener(
  async (details) => {
    const url = new URL(details.url);
    const domain = url.hostname;
    const ip = details.ip || 'N/A';

    console.log(`Request to ${domain} with IP ${ip}`);
    let history = await storage.get("history_url") || {} as NetworkData;
    if (typeof history === "object") {
      // 100 件以上のデータがある場合は古いものから削除
      if (Object.keys(history).length > 100) {
        const sorted = Object.entries(history).sort((a, b) => a[1].timestamp - b[1].timestamp);
        delete history[sorted[0][0]];
      }
      if (!history[domain] && history[domain]?.ip !== ip) {
        // データがない場合のみ追加する
        history = { ...history, [domain]: { ip, timestamp: Date.now() } };
        // await storage.set("history_url", history);
      }
    }
  },
  { urls: ["<all_urls>"] }
);
