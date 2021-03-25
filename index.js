const app = require('./app');
const { connectWithDb } = require('./helpers/db-helper');

const { API_PORT } = process.env;

app.set('port', API_PORT || 7777);

const server = app.listen(app.get('port'), () => {
  connectWithDb();
  console.log(`Express running → PORT ${server.address().port}`);
});
