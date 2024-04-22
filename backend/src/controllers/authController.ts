import { Request, Response } from 'express';
import authService from '../services/authService';

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error: any) { // Explicitly type 'error' as 'any'
    res.status(400).json({ message: error.message });
  }
};

const signup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    await authService.signup(username, password);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error: any) { // Explicitly type 'error' as 'any'
    res.status(400).json({ message: error.message });
  }
};

export default { login, signup };
