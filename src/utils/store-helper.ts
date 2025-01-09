export default class StoreService {
  get(key: string, fallbackData?: any) {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else return fallbackData;
  }

  save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }
}
