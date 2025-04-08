const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path'; // ⬅️ Add this line
import { fileURLToPath } from 'url'; // ⬅️ add this
import { dirname } from 'path';       // ⬅️ add this
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const __filename = fileURLToPath(import.meta.url); // ⬅️ add this
const __dirname = dirname(__filename);             // ⬅️ add this

const app = express();
const PORT = Number(process.env.PORT) || 3001;

// Correctly serve static files from the client/dist folder
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(express.json());
app.use(routes);

// Serve index.html for any unknown routes (important for frontend)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, '0.0.0.0', () => {  // ⬅️ Bind to 0.0.0.0
    console.log(`Server is listening on port ${PORT}`);
  });
});
