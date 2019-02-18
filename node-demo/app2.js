/**
 * 路由
 *  是指向客户端提供它所发出的请求内容的机制
 *  对基于web的客户端/服务端程序来说，客户端在url中指明它想要的内容，具体来说就是路径和查询字符串
 */
const http = require('http');
http.createServer((req, res) => {
  // 规范化url，去掉查询字符串、可选的反斜杠，并把它转为小写
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path){
    case '':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Homepage');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About');
      break;
    default:
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Not Found');
      break;
  }
}).listen(2600);
console.log('app started on localhost:2600;');