import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email };
    const expiresIn = { expiresIn: '2h' };
    return jwt.sign(user, secret_key, expiresIn);
};

const token = generateToken({ id: 1, email: 'test@gmail.com' });