import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // for test
    console.log("✅ Found user:", user.username);
    console.log("🟡 Input password:", password, "| Length:", password.length);
    console.log("🟡 Hashed password in DB:", user.password);


    const isPasswordValid = await bcrypt.compare(password, user.password);
    //for test
    console.log("🔍 Password match:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY!, {
      expiresIn: '1h',
    });

    return res.json({ token });

  } catch (error) {
    console.error('Login error:', error);
    // FIXED: added return here to satisfy TS
    return res.status(500).json({ message: 'Server error during login' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
