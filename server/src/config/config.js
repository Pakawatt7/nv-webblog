module.exports ={
 port: 8081,
 db: {
    database: Process.env.DB_NAME || 'nvWebblogDb',
    user: process.env.DB.user || 'root',
    password: process.env.DB_PASS || '',
    options: {
        dialect: process.env.DIALECT || 'sqlite',
        Storage: './nvwebblog-db.sqlite'
     },
   }
}