const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comments");
const dbRouter = require("./routes/db");
const postRouter = require("./routes/posts");
const cors = require("cors");

// Use environment variable for PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Define CORS options
// Apply CORS middleware with options
const corsOptions = {
  origin: 'https://social-f-three.vercel.app',  // Explicitly specify the allowed origin
  credentials: true,                           // Allow cookies and other credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow necessary HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow necessary headers
};

// Apply CORS middleware with the options
app.use(cors(corsOptions));
// Body parser middlewares


// Routes
app.use(dbRouter);
app.use(authRouter);
app.use(commentRouter);
app.use(postRouter);

app.get("/", (req, res) => {
  res.send("this is the new app created by bhoumik");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});