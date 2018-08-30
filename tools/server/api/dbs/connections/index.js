'use strict'

const Mysql = require('mysql'),
  Url = require('url'),
  ParsedConnStr = Url.parse(process.env.CLEARDB_DATABASE_URL)

const Connection = Mysql.createConnection({
  host     : ParsedConnStr.host,
  user     : ParsedConnStr.auth.split(':')[0],
  password : ParsedConnStr.auth.split(':')[1],
  database : ParsedConnStr.pathname.substring(1)
})

module.export = {
  Mysql: Connection.connect()
}
