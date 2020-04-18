import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['id', 'url', 'filename', 'originalname'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // É gerado um JSON de erros, utilizo o map para filtar apenas a mensagem que me interessa.
      });
    }
  }

  async show(req, res) {
    try {
      // Recebendo o ID do aluno
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      // Verificando se o aluno existe
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['id', 'url', 'filename', 'originalname'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      // Ação que será tomada
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // É gerado um JSON de erros, utilizo o map para filtar apenas a mensagem que me interessa.
      });
    }
  }

  async delete(req, res) {
    try {
      // Recebendo o ID do aluno
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      // Verificando se o aluno existe
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      // Ação que será tomada
      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // É gerado um JSON de erros, utilizo o map para filtar apenas a mensagem que me interessa.
      });
    }
  }

  async update(req, res) {
    try {
      // Recebendo o ID do aluno
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      // Verificando se o aluno existe
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      // Ação que será tomada
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // É gerado um JSON de erros, utilizo o map para filtar apenas a mensagem que me interessa.
      });
    }
  }
}

export default new AlunoController();// Já retorna a classe instanciada onde ela for chamada.
