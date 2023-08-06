export default (Sequelize,DataTypes) =>{
    const User = Sequelize.define('User',{
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })

    return User
}