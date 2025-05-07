import express from "express";
import path from "path";

import setRoutes from "./routes/index";
import reactRoutes from "./routes/react-pages";

const app = express();
const PORT = process.env.PORT || 3000;

// Set up routes
setRoutes(app);
reactRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
