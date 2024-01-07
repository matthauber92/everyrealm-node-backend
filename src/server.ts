import burritoRoutes from "./routes/burritoRoutes";
import orderRoutes from "./routes/orderRoutes";

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger').swaggerSpec;
const app = express();

// Integrate Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware for JSON parsing
app.use(express.json());

// Use the burrito routes
app.use('/api', burritoRoutes);
app.use('/api', orderRoutes);

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});
