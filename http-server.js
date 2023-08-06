let http = require('http')

let server = http.createServer()
let port = 8000

server.on('request',(request, response)=>{
  //  request  获取请求有关的信息
  //  response  向客户端发送响应
  console.log(request.method, request.url)

  response.writeHead(200, {
    'content-type': 'text/html; charset=utf-8',
    'foo': 'barrrrr'
  })

  response.write('<h1> hello world </h1>')
  response.end()
})

server.listen(port, ()=>{
  console.log('listen at ', port)
})

