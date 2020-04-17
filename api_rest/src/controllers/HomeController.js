import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    /* const novoAluno = await Aluno.create({
      nome: 'João',
      sobrenome: 'Souza',
      email: 'joao@gmail.com',
      idade: 55,
      peso: 80,
      altura: 1.85,
    }); */
    res.json('Index');
  }
}

export default new HomeController();// Já retorna a classe instanciada onde ela for chamada.
