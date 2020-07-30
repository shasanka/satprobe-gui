export const ipPacketStats = [
  { "FL IP Packets": 2000 },
  { "RL IP Packets": 1850 },
];

export const ipPacketsForwardingStats = [
  { Interface: "TC1" },
  { "IP Packets Count": 3000 },
  { "IP Packets Size": 125 },
  { "IP Packets Rate": 30 },
];

const currentTime = () => {
  const d = new Date();
  return d.getTime();
};

export const ipPacketsStorageStats = [
  { "Current Pcap File": "Dummy" },
  { "IP Packets Stored": 1500 },
  { "IP Packets Rate": 30 },
  { "Current File Timestamp ": currentTime() },
];
