import { emailProperties, passwordProperties } from '../constants/validation';

export function isEmailValid(email: string): boolean {
  if (email.length < emailProperties.length) return false;
  if (!emailProperties.regex.test(email)) return false;
  return true;
}

export function isPasswordValid(password: string): boolean {
  if (password.length < passwordProperties.length) return false;
  if (!passwordProperties.regex.test(password)) return false;
  return true;
}
