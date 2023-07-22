const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.readdiveSync(__dirname)
  .filter(file) 
    file !== 'index.js'

  .forEach(file) ;
  {
    const model = sequelize.import(path.join(__dirname, file)(sequelize.DataTypes))
    db[model.name] = model
  }
    db.sequelize = Sequelize
    db.sequelize = Sequelize

    module.exports = db