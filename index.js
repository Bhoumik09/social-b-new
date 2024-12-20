const express = require("express");
const cors = require("cors");

const app = express();
const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comments");
const dbRouter = require("./routes/db");
const postRouter = require("./routes/posts");

// Use environment variable for PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Define CORS options
const corsOptions = {
  origin: 'https://social-f-three.vercel.app',  // Explicitly specify the allowed origin
  credentials: true,                            // Allow cookies and other credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow necessary HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow necessary headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({ limit: '10mb' })); // Set a body size limit if needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use(dbRouter);
app.use(authRouter);
app.use(commentRouter);
app.use(postRouter);

// Base route
app.get("/", (req, res) => {
  res.send("This is the new app created by Bhoumik.");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
