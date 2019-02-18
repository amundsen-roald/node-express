const express = require('express');

let app = express();

app.set('port', process.env.PORT || 2333);

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About Meadowlark Travel');
})

// 定制404页面
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 not found');
})

// 定制500页面
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 Server Error');
})

app.listen(app.get('port'), () => {
  console.log(' Express started on http://localhost:' + app.get('port') + ' ; press Ctrl-C to terminate');
})