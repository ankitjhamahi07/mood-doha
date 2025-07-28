// server/dev.ts
import { prepareApp } from "./app";
import { log } from "./vite";

const port = parseInt(process.env.PORT || "5001", 10);

prepareApp().then((server) => {
    server.listen(port, "0.0.0.0", () => {
      log(`🟢 Server running at http://localhost:${port}`);
    });
  });
  
