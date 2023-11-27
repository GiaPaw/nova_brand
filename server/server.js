const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.RENDER_DB_HOST, // Sử dụng biến môi trường Render
    port: process.env.RENDER_DB_PORT, // Sử dụng biến môi trường Render
    username: 'admin',
    password: '123456',
    database: 'mysql',
  });