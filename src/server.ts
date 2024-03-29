import burritoRoutes from "./routes/burritoRoutes";
import orderRoutes from "./routes/orderRoutes";
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger').swaggerSpec;

const app = express();

// Integrate Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cookieParser("cookie-password"));

// add CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

// Middleware for JSON parsing and request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Use the burrito routes
app.use('/api', burritoRoutes);
app.use('/api', orderRoutes);

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});
