const config = {
  production: {
    DATABASE_URL: 'mongodb://localhost:27017/bon-appetit',
    PORT: 3001,
  },
};

module.exports = config['production'];
