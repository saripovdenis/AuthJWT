import { makeAutoObservable } from 'mobx';
import { register, login } from './api';
import { browserLocalStorage, Storage } from '../browser';
import { isEmailValid, isPasswordValid } from '../../service/validateCreds';

type Credentials = {
  email: string;
  password: string;
};

class Auth {
  private readonly storage: Storage;

  private readonly tokenKey = 'token';

  private email = '';

  private password = '';

  private set token(token: string) {
    this.storage.setItem(this.tokenKey, token);
  }

  private get token(): string {
    return this.storage.getItem(this.tokenKey);
  }

  constructor(storageInstance: Storage) {
    makeAutoObservable(this);
    this.storage = storageInstance;
  }

  public async register(creds: Credentials): Promise<boolean> {
    if (isEmailValid(creds.email) && isPasswordValid(creds.password)) {
      const { result, token } = await register(creds);
      if (result) {
        this.email = creds.email;
        this.password = creds.password;
        this.token = token;
      }
      return result;
    }
    throw new Error('Not valid');
  }

  public async login(creds: Credentials): Promise<boolean> {
    if (isEmailValid(creds.email) && isPasswordValid(creds.password)) {
      const { result, token } = await login(creds);
      if (result) {
        this.email = creds.email;
        this.password = creds.password;
        this.token = token;
      }
      return result;
    }
    throw new Error('Not valid');
  }
}

export default new Auth(browserLocalStorage);
