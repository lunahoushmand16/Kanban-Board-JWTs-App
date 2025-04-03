import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const secret = process.env.JWT_SECRET_KEY!;
    const decoded = jwt.verify(token, secret) as JwtPayload;
    req.user = decoded; // add user info to the request object
    return next();

  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
