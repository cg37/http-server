let http = require('http')

let server = http.createServer()
let port = 8000

server.on('request',async (request, response)=>{
  //  request  获取请求有关的信息
  //  response  向客户端发送响应
  // request.socket, 承载这个http请求的tcp连接
  console.log('method:', request.method, '\nrequest.url:',request.url,'\nrequest.socket', request.socket.remoteAddress)

  response.writeHead(200, {
    'content-type': 'text/html; charset=utf-8',
    'foo': 'barrrrr'
  })

  response.write('<h1> hello world </h1>')
  await delay(3000)
  response.write(`<h2> ${request.url} </h2>`)
  await delay(3000)
  response.write(`<pre>${JSON.stringify(request.headers, undefined, 2)}</pre>`)
  response.end()
})

server.listen(port, ()=>{
  console.log('listen at ', port)
})


function delay(time) {
  return new Promise(resolve=>{
    setTimeout(resolve,time)

  })
}
