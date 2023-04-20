require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');
// const initModel = require('./models/initModels');

db.authenticate()
  .then(() => console.log('Database authenticate ⚡'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Database synced 💡'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
