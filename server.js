import express from "express"; // Import the Express framework
import routes from "./src/routes/postRoutes.js";


// Create an Express application
const app = express();
app.use(express.static("uploads"));
routes(app);

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Servidor escutando..."); // Log a message to the console indicating the server is listening
});


