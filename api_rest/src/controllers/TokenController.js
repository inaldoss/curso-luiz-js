import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;// Isso equivale a isso (req.body.email, req.body.password)

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });// Tá validando se o usuário existe na base pelo req.body.email

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user; // Isso é mesmo que isso id = user.id
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    res.json({ token });
  }
}

export default new TokenController();// Já retorna a classe instanciada onde ela for chamada.
