import server from "./socket.js";
import { PORT } from "./utils/constants.js";

// Run Server
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
