module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    }
    }, 
    { timestamps: false});
    return Question;
  };