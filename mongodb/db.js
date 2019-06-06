let mongoose = require('mongoose');
const DB_URL = 'mongodb://118.126.102.188:27017/test_db';

mongoose.connect(DB_URL, { useNewUrlParser: true  });

mongoose.connection.on('connected', () => {
  console.log('数据库连接成功')
})

mongoose.connection.on('disconnected', () => {
  console.log('数据库连接失败')
})

mongoose.connection.on('error', () => {
  console.log('数据库连接异常')
})

module.exports = mongoose