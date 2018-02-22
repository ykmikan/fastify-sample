const app = require('./src/server');

app.listen((app.conf.port), (err) => {
  if (err) throw err;

app.log.info(`app listening on ${app.server.address().port}`);
});
