import "dotenv/config";
import express, { Express, Request, Response, NextFunction } from 'express'
import { createServer } from "http";
require('dotenv').config();
const { databaseConnect } = require('./config/database');
import auth from "./src/routes/auth"
import vehicleRoutes from "./src/routes/vehicle"
import driverRoutes from "./src/routes/drivers"
import userRoutes from "./src/routes/user";

const mongoose = require('mongoose');
import path from "path";


const app: Express = express();
const server = createServer(app);
const port = process.env.PORT;

mongoose.set('strictQuery', false);

require('dotenv').config({ path: '.env', override: true });

// Connect to the database
databaseConnect();

app.use('/vehicle-documents', express.static(path.join(__dirname, 'uploads')));
app.use('/driver', express.static(path.join(__dirname, 'uploads')));
app.use('/driver-license-documents', express.static(path.join(__dirname, 'uploads')));
app.use('/driver-onboarding-documents', express.static(path.join(__dirname, 'uploads')));

// Middleware for JSON parsing


app.use(express.json());

// Middleware for logging (you can use morgan or other logging libraries)
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.get("/abid", (req: Request, res: Response) => {
  res.status(200).json({ name: "Abid Husain" });
});

app.use("/api", auth);
app.use("/api/v1", vehicleRoutes)
app.use("/api/d1", driverRoutes)
app.use("/api/user",userRoutes)

server.listen(port, () => {
  console.log(`Server Runnig 🚀 @ http://localhost:${port}`);
});

