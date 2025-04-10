// backend/index.js
require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/users');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Serveur backend démarré sur le port ${PORT}`);
  });
}

// 👇 Très important pour permettre les tests
module.exports = app;
