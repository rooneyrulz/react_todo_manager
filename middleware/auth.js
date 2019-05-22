import jwt from 'jsonwebtoken';
import config from 'config';

export default async (req, res, next) => {
  try {
    const token = await req.header('x-auth-token');

    if (!token) {
      return res.status(401).send('Unauthorized!');
    }

    const decoded = await jwt.verify(token, config.get('JWT_KEY'));

    if (!decoded) {
      return res.status(500).send('Something went wrong!');
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Invalid signature!');
  }
};
