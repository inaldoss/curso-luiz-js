import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers; // Isso é o mesmo que authorizathion = req.headers.authorizathion

  if (!authorization) {
    return res.status(401).json({
      errors: ['Você precisa estar logado.'],
    });
  }
  const [, token] = authorization.split(' '); // Tira o espaço entre o Bearer e token

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido.'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
