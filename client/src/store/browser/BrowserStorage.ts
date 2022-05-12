export interface Storage {
  setItem: (k: string, v: string) => void;
  getItem: (k: string) => string | null;
  removeItem: (k: string) => void;
}

class BrowserStorage {
  private storageInstance: Storage;

  constructor(storageInstance: Storage) {
    this.storageInstance = storageInstance;
  }

  public getItem(key: string): string {
    return this.storageInstance.getItem(key);
  }

  public setItem(key: string, value: string): void {
    this.storageInstance.setItem(key, value);
  }

  public removeItem(key: string): void {
    this.storageInstance.removeItem(key);
  }
}

export const browserLocalStorage = new BrowserStorage(localStorage);
export const browserSessionStorage = new BrowserStorage(sessionStorage);
