import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "child-tracking-app",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;