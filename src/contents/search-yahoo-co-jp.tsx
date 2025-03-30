import type { PlasmoCSConfig } from "plasmo"
import React, { useEffect, useState } from "react";

export const config: PlasmoCSConfig = {
  matches: ["https://search.yahoo.co.jp/*"],
  all_frames: true
};

const domain = "search.yahoo.co.jp";

const StatusBox = () => {

  const [ip, setIp] = useState("N/A");

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "getIpCache", url: window.location.href }, (response) => {
      setIp(response.ip);
    });
  }, []);

  return (
    <div>
      ip: {ip}
    </div>
  )
};

export default StatusBox;
