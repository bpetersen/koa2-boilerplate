var koaServer = require('./server').default

var server = koaServer.listen(3000)

module.exports = server
