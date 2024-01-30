require('dotenv').config();

// docker container run --name todolist -e MYSQL_ROOT_PASSWORD=listadeafazeres -d -p 3306:3306 mysql:8.0.29

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'reminders',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  dialect: 'mysql',
};

module.exports = {
  development: { ...config },
  test: { ...config },
  production: { ...config }
};
