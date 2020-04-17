module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos', // Nome da tabela
    'email', // Nome da coluna que eu quero alterar
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),

  down: () => { },
};
