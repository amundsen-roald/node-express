/**
 * 静态资源服务
 *  一些不会变化的资源(图片、样式等)，它们称之为“静态资源”
 *  较大的项目，应该使用ngnix或者cdn之类的代理服务来提供静态资源
 */
const http = require('http');
const fs = require('fs');

let serveStaticFiles = (res, path, contentType, responseCode = 200) => {
  console.log(__dirname + path)
  fs.readFile(__dirname + path, (err, data) => {
    if (err){
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('500 - Internal Error');
      return;
    }
    res.writeHead(responseCode, {'Content-Type': contentType});
    res.end(data);
  })
}

http.createServer((req, res) => {
  // 规范化url，去掉查询字符串、可选的反斜杠，并把它转为小写
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path){
    case '':
      serveStaticFiles(res, '/../public/html/home.html', 'text/html');
      break;
    case '/about':
      serveStaticFiles(res, '/../public/html/about.html', 'text/html');
      break;
    case '/img/1.jpg':
      serveStaticFiles(res, '/../public/img/1.jpg', 'image/jpeg');
      break;
    default:
      serveStaticFiles(res, '/../public/html/notfound.html', 'text/html', 404);
      break;
  }
}).listen(2600);
console.log('app started on localhost:2600;');