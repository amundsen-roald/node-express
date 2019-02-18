// Virtual data
const fortunes = [
  'javascript',
  'node',
  'express',
  'ruby',
  'goland',
  'java',
  'angular',
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

let getFortune = () => {
  let randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
  return randomFortune;
}

module.exports = {
  getFortune
}