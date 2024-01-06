import burritoRoutes from "./routes/burritoRoutes";

const express = require('express');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Use the burrito routes
app.use('/api', burritoRoutes);

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});
