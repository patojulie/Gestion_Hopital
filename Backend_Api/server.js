
const {sequelize} = require('./src/models');
const express = require('express');
const userRoute = require('./src/routes/userRoute');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001', // autorise uniquement React
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/api/users', userRoute);


sequelize.sync({ alter: true })
  .then(() => console.log('Base synchronisée avec toutes les tables'))
  .catch(err => console.error('Erreur de synchronisation', err));

  const PORT = 3000;
  app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));