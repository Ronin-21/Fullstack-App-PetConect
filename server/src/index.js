import app from "./app.js";
import { PORT } from "./database/config.js";

// Run Server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
