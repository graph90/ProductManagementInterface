import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs';

const saltRounds = 10;
const secretKey = 'your_secret_key';
const usersFilePath = './users.txt';

const generateToken = (username: string) => {
  return jwt.sign({ username }, secretKey, { expiresIn: '1h' });
};

const login = async (username: string, password: string) => {
  // Read users from file
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  const users = JSON.parse(usersData);

  // Find user by username
  const user = users.find((user: { username: string }) => user.username === username);

  if (!user) {
    throw new Error('User not found');
  }

  // Compare hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    return generateToken(username);
  } else {
    throw new Error('Invalid password');
  }
};

const signup = async (username: string, password: string) => {
  // Read users from file
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  const users = JSON.parse(usersData);

  // Check if user already exists
  const existingUser = users.find((user: { username: string }) => user.username === username);

  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Add new user
  users.push({ username, password: hashedPassword });

  // Write users to file
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
};

export default { login, signup };
