'use strict'
module.exports = (sequelize, DataTypes) => {
   const { Model } = sequelize.Sequelize
   class user extends Model {}

   user.init(
      {
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notNull: {
                  msg: 'Email is required'
               },
               isEmail: {
                  msg: 'Email format is wrong'
               },
               isUnique(value) {
                  return user
                     .findAll({
                        where: {
                           email: value
                        }
                     })
                     .then((result) => {
                        if (result.length != 0) {
                           throw new Error('Email already exsist')
                        }
                     })
               }
            }
         },
         password: DataTypes.STRING
      },
      { hooks: {}, sequelize }
   )
   user.associate = function (models) {
      // associations can be defined here
   }
   return user
}
