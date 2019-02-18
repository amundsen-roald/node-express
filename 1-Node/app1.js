// 启动一个最简单的web服务，就从hello world开始吧！
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world');
}).listen(2600);
console.log('app started on localhost:2600;');

/**
 * Node的核心理念是事件驱动编程
 *  在上面，http.createServer()方法将一个函数作为参数，每次有http请求发送过来时，就调用该函数
 * 这个简单的函数只是把内容类型设为普通文本，并发送字符串hello world
 */