const express = require('express');
let app = express();

let handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 2333);

app.use(express.static(__dirname + '/public'));

// Virtual data
const fortunes = [
  'javascript',
  'node',
  'express',
  'ruby',
  'goland',
  'java',
  'angualar',
  'vue',
  'react',
  'webpack',
  'gulp',
  'commonjs',
  'amd',
  'cmd',
  'es6',
  'koa2',
  'eggjs',
  'mongodb',
  'redis',
];

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/about', (req, res) => {
  let randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
  res.render('about', { fortunes: randomFortune });
})

// 定制404页面
app.use((req, res) => {
  res.status(404);
  res.render('404');
})

// 定制500页面
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render(500);
})

app.listen(app.get('port'), () => {
  console.log(' Express started on http://localhost:' + app.get('port') + ' ; press Ctrl-C to terminate');
})